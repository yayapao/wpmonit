import { WN, WP, WL } from './constant'
import { getNavs } from './nav'
import { getNetworkConnections } from './network'
import { getOSInfo } from './os'
import { getScreenInfo } from './screen'
import { getPaintInfo } from './paint'
import { coreVitals } from './metrics'
import { getMemoryInfo } from './memory'

export function isSupportedWP(): boolean {
  return WP && !!WP.now && !!WP.getEntries && !!WN
}

export function collectInfo() {
  const timeOrigin = WP.timeOrigin
  const href = WL.href
  const paintInfo = getPaintInfo()
  const navs = getNavs()
  const osInfo = getOSInfo()
  const screenInfo = getScreenInfo()
  const ntconnections = getNetworkConnections()
  const memoryInfo = getMemoryInfo()
  return {
    timeOrigin,
    href,
    ...paintInfo,
    ...coreVitals,
    ...memoryInfo,
    ...navs,
    ...osInfo,
    ...screenInfo,
    ...ntconnections,
  }
}

export function collectWorkerStatus() {
  if ('serviceWorker' in WN) {
    if (WN.serviceWorker.controller) return 'controlled'
    return 'supported'
  }
  return 'unsupported'
}