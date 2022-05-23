# Anov-core Visualization Platform Kernel


[![npm Status](https://badgen.net/npm/v/anov-core/?icon=npm)](https://www.npmjs.com/package/anov-core)
[![npm Status](https://badgen.net/npm/license/anov-core)](https://www.npmjs.com/package/anov-core)
[![install size](https://badgen.net/packagephobia/install/anov-core)](https://www.npmjs.com/package/anov-core)
[![publish size](https://badgen.net/packagephobia/publish/anov-core)](https://www.npmjs.com/package/anov-core)
[![total downloads](https://badgen.net/npm/dt/anov-core)](https://www.npmjs.com/package/anov-core)


ANOV Visualization Platform Kernel encapsulates all basic services, such as face recognition, gesture recognition, speech recognition, theme skin changing, internationalization, animation engine, basic components 

## 1.Install
```javascript
npm install --save anov-core
```

## 2. Usage
```javascript
import * as anov from 'anov-core'

// 基础服务
anov.baseServer
// 运行时服务
anov.runtimeServer
// 环境服务
anov.envServer
// 数据源服务
anov.dataSourceServer
// 系统检测服务
anov.systemCheckServer
// 语音识别服务
anov.voiceRecognizeServer
// 语音反馈服务
anov.voiceFeedbackServer
// 人脸识别服务
anov.faceRecognizeServer
// 手势识别服务
anov.gestureRecognizeServer
// 光感识别服务
anov.lightSensorServer
// 页面服务
anov.pageServer
// 基础部件服务
anov.partServer
// 动作服务
anov.actionServer
// 快捷键服务
anov.hotkeyServer
// 国际化语音服务
anov.languageServer
// 动画服务
anov.animateServer
// 主题服务
anov.themeServer
// 音效服务
anov.soundServer
// 预加载服务
anov.preloadServer
// 大小适配服务
anov.sizeAdaptServer
// 场景特效服务
anov.specialEffectServer
// 存储芯片服务
anov.chipServer
// license服务
anov.licenseServer
```
 
Specific cases
```javascript
...
// 得到系统当前上下文
anov.runtimeServer.getCurrentContext()
// 开启光感识别
anov.lightSensorServer.start()
// 切换到下个系统内置主题
anov.themeServer.next()
...
```

## 3.Packaging & Publishing

```python
npm run build
npm publish
```

### 4.Change log ###

[Releases](https://github.com/zhu18/anov-core/releases)