import { WN, WP, WL } from './constant'
import { getNavs } from './nav'
import { getNetworkConnections } from './network'
import { getOSInfo } from './os'
import { getScreenInfo } from './screen'
import { getPaintInfo } from './paint'
import { coreVitals } from './metrics'
import { getMemoryInfo } from './memory'
import { getResource } from './resource'
import { config } from '../config'

export function isSupportedWP(): boolean {
  return WP && !!WP.now && !!WP.getEntries && !!WN
}

export function collectInfo() {
  const timeOrigin = WP.timeOrigin
  const href = WL.href
  const paintInfo = getPaintInfo()
  const nav = getNavs()
  const os = getOSInfo()
  const screen = getScreenInfo()
  const ntconnections = getNetworkConnections()
  const memory = getMemoryInfo()
  const resources = config.autoSendSR ? getResource() : []

  return {
    timeOrigin,
    href,
    coreVitals: {
      ...paintInfo,
      ...coreVitals,
    },
    nav,
    os,
    memory,
    screen,
    ntconnections,
    resources,
  }
}

export function collectWorkerStatus() {
  if ('serviceWorker' in WN) {
    if (WN.serviceWorker.controller) return 'controlled'
    return 'supported'
  }
  return 'unsupported'
}
