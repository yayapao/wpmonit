import { isSupportedWP, collectWorkerStatus } from './main'
import { WPMNavigationTiming, WPMNavInfo } from '../index.d'
import { getDM, getHC } from './constant'

export function getNavTiming(): WPMNavigationTiming {
  if (!isSupportedWP()) return {}
  // get navigation timing data
  const nav = window.performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming
  if (!nav) return {}
  const {
    redirectStart,
    redirectEnd,
    domainLookupStart,
    domainLookupEnd,
    connectEnd,
    secureConnectionStart,
    connectStart,
    requestStart,
    responseStart,
    responseEnd,
    domInteractive,
    domComplete,
    loadEventEnd,
    loadEventStart,
    transferSize,
    encodedBodySize,
    decodedBodySize,
  } = nav
  return {
    // redirect time
    redirect: +(redirectEnd - redirectStart).toFixed(2),
    // DNS lookup time
    dns_lookup: +(domainLookupEnd - domainLookupStart).toFixed(2),
    connection_time: +(connectEnd - connectStart).toFixed(2),
    tls_time:
      secureConnectionStart > 0
        ? +(connectEnd - secureConnectionStart).toFixed(2)
        : 0,
    // time to fisrst bytes
    ttfb: +(responseStart - requestStart).toFixed(2),
    // content download time
    download_time: +(responseEnd - responseStart).toFixed(2),
    // dom parse
    dom_parsed: +(domInteractive - responseEnd).toFixed(2),
    // resource loaded
    loadend: +(loadEventEnd - loadEventStart).toFixed(2),
    // page total loaded cost
    total_loaded: +loadEventEnd.toFixed(2),
    // dom ready: dom parse + dom content loaded
    dom_ready: +domComplete.toFixed(2),
    // document and resource size
    transfer_size: transferSize | 0,
    encoded_body_size: encodedBodySize | 0,
    decoded_body_size: decodedBodySize | 0,
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
    ...timing,
  }
}
