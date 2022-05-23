// 光感服务 zhu18 2019-7-5
import BaseServer from './../core/BaseServer'
import ColorThief from './ColorThief'

const domContainerId = 'lightSensorDomContainer'
const videoId = 'lightSensorVideo'
const canvasId = 'lightSensorCanvas'
const imgId = 'lightSensorImg'
const constraints = {
    audio: false,
    video: true
};
const catchSize = {
    w: 100,
    h: 100
}
const eventType = {
    readyStart: 'readyStart',
    start: 'start',
    stop: 'stop',
    lightChange:'lightChange',
    error:'error'
}

class LightSensorServer extends BaseServer {
    constructor() {
        super('lightSensor')
        this.flag = false
    }
    get isStart() {
        return this.callState('isStart')
    }
    set isStart(v) {
        this.callMutation('setIsStart', v)
    }
    // 是否启用亮度感应
    get isBrightness() {
        return this.callState('isBrightness')
    }
    set isBrightness(v) {
        this.callMutation('setIsBrightness', v)
    }
    //是否启用颜色感应
    get isHue() {
        return this.callState('isHue')
    }
    set isHue(v) {
        this.callMutation('setIsHue', v)
    }
    //颜色感应间隔
    get intervalTime() {
        return this.callState('intervalTime')
    }
    set intervalTime(v) {
        this.callMutation('setIntervalTime', v)
    }
    // 光感颜色
    get lightColor(){
        return this.callState('lightColor')
    }
    set lightColor(v){
        this.callMutation('setLightColor', v)
    }

    init(config) {
        let cfg = this._extractConfig(config)
        this.isStart = cfg.isStart
        this.isHue = cfg.isHue
        this.isBrightness = cfg.isBrightness
        this.intervalTime = cfg.intervalTime
        this._initDom()
    }
    readyStart(){
        this.dispatchEvent({ type: eventType.readyStart })
    }
    //启动光感服务
    start() {
        // if(this.isStart) return
        if(this.flag && this.isStart) return 
        this.checkVideo().then(res => {
            this._video.srcObject = res
            this._video.onloadedmetadata = (e) => {
                this._video.play();
                //光感任务线程
                this._taskThread()
            
                this.isStart=true;
                this.flag = this.isStart
                //分发启动事件
                this.dispatchEvent({
                    type: eventType.start
                })
                this.addInfo('光感识别启动')
            };
        }).catch(err => {
            this.addError(err)
            this.dispatchEvent({ type: eventType.error,result:err})
        })

    }
    //停止光感服务
    stop() {
        if(!this.flag && this.isStart) return
        //停止捕获视频流
        this._video.srcObject && this._video.srcObject.getTracks().length > 0 && this._video.srcObject.getTracks()[0].stop()
        this.isStart=false
        this.flag = this.isStart
        //终止任务线程
        clearTimeout(this._taskTimer)
        //分发事件
        this.dispatchEvent({
            type: eventType.stop
        })
        this.addInfo('光感识别停止')
    }
    _initDom(){
        if (this._lightSensorDomContainer) return

        this._lightSensorDomContainer = document.createElement('div')
        this._lightSensorDomContainer.id = domContainerId
        this._lightSensorDomContainer.style = 'display:none'
        this._initVideo()
        this._initCanvas()
        this._initImg()
        document.body.appendChild(this._lightSensorDomContainer)
    }
    _initVideo() {
        if (this._video) return

        this._video = document.createElement('video')
        this._video.id = videoId
        this._video.width = catchSize.w
        this._video.height = catchSize.h
        this._lightSensorDomContainer.appendChild(this._video)
    }
    _initCanvas() {
        if (this._canvas) return

        this._canvas = document.createElement('canvas')
        this._canvas.id = canvasId
        this._canvas.width = catchSize.w
        this._canvas.height = catchSize.h
        this._lightSensorDomContainer.appendChild(this._canvas);
    }
    _initImg() {
        if (this._img) return

        this._img = document.createElement('img')
        this._img.id = imgId
        this._img.width = catchSize.w
        this._img.height = catchSize.h
        this._lightSensorDomContainer.appendChild(this._img);
    }
    //光感任务线程
    _taskThread(){
        this._taskTimer=setTimeout(()=>{
            this.getColor().then((c)=>{
                if(this._lightColorIsChange(c))
                {
                    this.lightColor = c;
                    //分发事件 光感颜色改变
                    this.dispatchEvent({type:eventType.lightChange,result:c})
                }
                this._taskThread()
            })
        },this.intervalTime||1000)
    }
    // 得到光感颜色
    getColor() {
        return new Promise((resolve, reject) => {
            //绘制canvas图形
            this._canvas.getContext('2d').drawImage(this._video, 0, 0, catchSize.w, catchSize.h);
            //把canvas图像转为img图片
            this._img.src = this._canvas.toDataURL("image/png");
            this._img.onload = () => {
                var colorThief = new ColorThief();
                let c = colorThief.getColor(this._img);
                resolve(c)
            }
            this._img.onerror=(e)=>{
                reject(e)
            }
        });
    }
    //颜色是否有变化
    _lightColorIsChange(c){
        let [r,g,b]=this.lightColor
        return !(r===c[0]&&g===c[1]&&b===c[2]) 
    }
}

const lightSensorServer = new LightSensorServer()
export {lightSensorServer}