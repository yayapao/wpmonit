import { WN } from './constant'

export function getOSInfo() {
  return {
    userAgent: WN.userAgent,
    appVersion: WN.appVersion
  }
}