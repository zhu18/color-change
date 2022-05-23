//anov模块store 配置   zhu18@vip.qq.com at 2019-12-26
import admin from './admin/store'
import voiceRecognize from './voiceRecognize/store'
import voiceFeedback from './voiceFeedback/store'
import faceRecognize from './faceRecognize/store'
import dataSource from './dataSource/store'
import gestureRecognize from './gestureRecognize/store'
import lightSensor from './lightSensor/store'
import env from './env/store'
import language from './language/store'
import theme from './theme/store'
import preload from './preload/store'
import license from './license/store'
import systemCheck from './systemCheck/store'
import animate from './animate/store'
// 页面配置
import page from './page/store'
import part from './part/store'
// 音效
import sound from './sound/store'
import focus from './focus/store'
import permission from './permission/store'

const store = {
  admin,
  voiceRecognize,
  voiceFeedback,
  faceRecognize,
  dataSource,
  gestureRecognize,
  lightSensor,
  part,
  page,
  env,
  language,
  theme,
  preload,
  sound,
  license,
  systemCheck,
  animate,
  focus,
  permission
}
export { store }
