//光感服务 store zhu18 2019-7-5

export default {
    namespaced: true,
    state: {
        isStart: false,
        isBrightness: true,
        isHue: true,
        intervalTime: 1000,
        lightColor: [200, 200, 200] //光感颜色
    },
    mutations: {
        setIsStart(state, value) {
            state.isStart = value
        },
        setIsBrightness(state, value) {
            state.isBrightness = value
        },
        setIsHue(state, value) {
            state.isHue = value
        },
        setIntervalTime(state, value) {
            state.intervalTime = value
        },
        setLightColor(state, value) {
            state.lightColor = value
        }
    }
}