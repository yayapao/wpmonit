import { WP } from './constant'
import { MemoryInfo } from '../index.d'

export function getMemoryInfo(): Partial<MemoryInfo> {
  if ('memory' in WP) {
    const cns = (WP as any).memory
    if (typeof cns !== 'object') return {}
    const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = cns
    return {
      jsHeapSizeLimit,
      totalJSHeapSize,
      usedJSHeapSize
    }
  }
  return {}
}