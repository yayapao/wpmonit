import { getLCP, getFID, getCLS } from 'web-vitals'
import { coreVitals } from './metrics'

export function initCoreVitals() {
  getLCP(entry => {
    coreVitals.lcp = +entry.value.toFixed(2)
  })
  getFID(entry => {
    coreVitals.fid = +entry.value.toFixed(2)
  })
  getCLS(entry => {
    coreVitals.cls = +entry.value.toFixed(2)
  })
}