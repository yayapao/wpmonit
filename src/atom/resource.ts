import { WP } from './constant'
import { config } from '../config'
import { pick } from 'lodash'

export function getResource() {
  const entries = WP.getEntriesByType('resource') as PerformanceResourceTiming[]
  const { resMaxDuration, resMaxSize } = config
  const maxDuration = resMaxDuration * 1000
  const maxSize = resMaxSize * 1000 * 1000
  const crt = []
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i]
    if (
      entry.duration >= maxDuration ||
      entry.encodedBodySize >= maxSize
    ) {
      const item = pick(entry, [
        'entryType',
        'initiatorType',
        'name',
        'duration',
        'decodedBodySize',
        'encodedBodySize',
        'transferSize',
      ])
      crt.push(item)
    }
  }
  return crt
}
