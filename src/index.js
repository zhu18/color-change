/*
 * @name: color-change
 * @description: Change the color element in the page, including image, video, canvas
 * @author: 朱润亚 zhu18@vip.qq.com (https://github.com/zhu18)
 * @license: MIT License
 * */
//git remote set-url origin 'https://gitee.com/zhu18/color-change.git'
//git remote set-url origin 'git@github.com:zhu18/color-change.git'

import Color from "./color"
import ColorThief from "./ColorThief"

class ColorPick{
    constructor(img){
        this.img=img
        this._parser=new ColorThief()

    }
    async getColor(){
        this.img=await this._getImageByElement(this.img)
        return this._parser.getColor(this.img);
    }
    async getColors(count=10){
        this.img=await this._getImageByElement(this.img)
        return this._parser.getPalette(this.img, count+1).slice(0, count)
    }
    _getImageByElement(el){
        return new Promise((resolve,reject)=>{
            if(el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'CANVAS'){
                resolve(el) 
            }
            else{
                if(el.style.background){
                    let img=document.createElement('IMG')
                    //img.crossOrigin='anonymous';
                    //跨域问题 
                    img.src=el.style.background.split("(")[1].split(")")[0].replaceAll('"','');
                    img.onload=()=>{
                        resolve(img)
                    }
                }
                else{
                    resolve(null)
                }
            }
        })
        
    }
}
const COLORCHANGE_TAG="__anov_colorChange_tag"

class ColorChange{
    constructor(el,isBright=false,isSaturate=false){
        if(typeof el === 'string'){
            this.el=document.querySelectorAll(el)
        }else{
            this.el=el
        }
        this.el=this.el||document.body//el2img
        //开启饱和度
        this.isSaturate=isSaturate
        //开启亮度
        this.isBright=isBright
    }
    async setColor(colorStr){
        let color = new Color(colorStr)
        //解析 初始化 hsl
        color.toString('hsl')

      if(this.el instanceof NodeList){
          Array.from(this.el).map( async (el)=>{
            await this._applyColor(el,color)
          })
      }
      else{
        await this._applyColor(this.el,color)     
     }
    }
    clear(){
        if(this.el instanceof NodeList){
            Array.from(this.el).map((el)=>{
                this._clearColor(el)
            })
        }
        else{
            this._clearColor(el) 
       }
    }
    _clearColor(el){
        if(el.hasAttribute(COLORCHANGE_TAG)){
            el.style.filter=''
            el.removeAttribute(COLORCHANGE_TAG)
        }
    }
    _applyColor(el,color){
        
       return (new ColorPick(el)).getColor().then((colorArray)=>{
            let mainColor = new Color(colorArray)
            mainColor.toString('hsl')
            // console.log(mainColor.hsl)
            // console.log(color.hsl)
            //色值偏移
            let hColor=color.hsl[0]-mainColor.hsl[0]
            let hue =  ' hue-rotate(' + hColor + 'deg)' 
            let saturate = this.isSaturate?' saturate(' + (color.hsl[1]*0.01).toFixed(1) + ')':''
            let bright = this.isBright?' brightness(' + (color.hsl[2]*0.02).toFixed(1) + ')':''
    
            el.style.filter =   hue + saturate + bright
            el.setAttribute(COLORCHANGE_TAG,'')
        })
        
    }
    
}



export {ColorChange, ColorPick, Color}

