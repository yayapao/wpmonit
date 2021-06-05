import { WS } from './constant'
import { ScreenInfo } from '../index.d'

export function getScreenInfo(): ScreenInfo {
  return {
    width: WS.width,
    height: WS.height,
    pixelDepth: WS.pixelDepth,
    colorDepth: WS.colorDepth
  }
}
