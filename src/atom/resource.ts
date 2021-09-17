import { WP } from './constant'
import { config } from '../config'
import { pick } from 'lodash'

export function getResource() {
  const entries = WP.getEntriesByType('resource') as PerformanceResourceTiming[]
  const { resMaxDuration, resMaxSize } = config
  const crt = []
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i]
    if (
      entry.duration >= resMaxDuration ||
      entry.encodedBodySize >= resMaxSize
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
