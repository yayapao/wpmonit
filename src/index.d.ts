class WPMonit {
  private v: string
  constructor() {}
  init(opts: Partial<Options>): void
}

export interface PaintInfo {
  fp: number
  fcp: number
  tbt: number
}

export interface CoreVitalsInfo {
  lcp: number
  fid: number
  cls: number
}

export interface MemoryInfo {
  jsHeapSizeLimit: number
  totalJSHeapSize: number
  usedJSHeapSize: number
}

export interface Options {
  app: string
  user: string
  delay: number
  dsn: string
}

export interface WPMNavInfo {
  deviceMemory: number
  hardwareConcurrency: number
  serviceWorkerStatus: 'unsupported' | 'supported' | 'controlled'
}

export interface WPMNavigationTiming {
  fetchTime?: number
  appCache?: number
  workerTime?: number
  networkTime?: number
  downloadTime?: number
  ttfb?: number
  headerSize?: number
  dnsLookupTime?: number
}

export enum EffectiveConnectionType {
  "2g",
  "3g",
  "4g",
  "slow-2g"
} 

export interface NetworkConnections {
  effectiveType: keyof typeof EffectiveConnectionType
  downlink: number
  rtt: number
  saveData: boolean
}

export interface ScreenInfo {
  width: number
  height: number
  pixelDepth: number
  colorDepth: number
}

export function init(opts: Partial<Options>): WPMonit