import { WN } from './constant'
import { NetworkConnections } from '../index.d'

export function getNetworkConnections(): Partial<NetworkConnections> {
  if ('connection' in WN) {
    const cns = (WN as any).connection
    if (typeof cns !== 'object') return {}
    return {
      effectiveType: cns.effectiveType,
      downlink: cns.downlink,
      rtt: cns.rtt,
      saveData: !!cns.savedata
    }
  }
  return {}
}