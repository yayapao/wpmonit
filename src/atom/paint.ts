import { WP } from './constant'
import { PaintInfo } from '../index.d'

export function getPaintInfo() {
  const crt: PaintInfo = {
    fp: 0,
    fcp: 0,
    tbt: 0
  }
  const entries = WP.getEntries()
  entries.forEach(entry => {
    if (entry.name === 'first-paint') {
      crt['fp'] = +entry.startTime.toFixed(2)
    }
    if (entry.name === 'first-contentful-paint') {
      crt['fcp'] = +entry.startTime.toFixed(2)
    }
  })
  // total-block-timing
  entries.forEach(entry => {
    if (entry.name !== 'self' || entry.startTime < crt.fcp) return
    if (entry.duration - 50 > 0) {
      crt.tbt += entry.duration
    }
  })
  return crt
}