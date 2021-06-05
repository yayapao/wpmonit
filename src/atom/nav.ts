import { isSupportedWP, collectWorkerStatus } from './main'
import { WPMNavigationTiming, WPMNavInfo } from '../index.d'
import { getDM, getHC } from './constant'

export function getNavTiming(): WPMNavigationTiming {
  if (!isSupportedWP()) return {}
  // get navigation timing data
  const nav = window.performance.getEntriesByType("navigation")[0] as any
  if (!nav) return {}
  return {
    // request resource to get all bytes
    fetchTime: +(nav.responseEnd - nav.fetchStart).toFixed(2),
    // app cache time
    appCache: +(nav.domainLookupStart - nav.fetchStart).toFixed(2),
    // service worker + response time
    workerTime: nav.workerStart > 0 ? +(nav.responseEnd - nav.workerStart).toFixed(2) : 0,
    // time to fisrst bytes
    ttfb: +(nav.responseStart - nav.requestStart).toFixed(2),
    // network(only) actions 
    networkTime: +(nav.responseEnd - nav.requestStart).toFixed(2),
    // content download time
    downloadTime: +(nav.responseEnd - nav.responseStart).toFixed(2),
    // HTTP header size
    headerSize: nav.transferSize - nav.encodedBodySize || 0,
    // DNS lookup time
    dnsLookupTime: +(nav.domainLookupEnd - nav.domainLookupStart).toFixed(2),
  }
}

export function getNavInfo(): WPMNavInfo {
  return {
    deviceMemory: getDM() || 0,
    hardwareConcurrency: getHC() || 0,
    serviceWorkerStatus: collectWorkerStatus(),
  }
}

export function getNavs() {
  const infos = getNavInfo()
  const timing = getNavTiming()
  return {
    ...infos,
    ...timing
  }
}
