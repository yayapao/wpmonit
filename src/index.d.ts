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
  tags: {[index: string]: any}
  callback: (data: any) => void
}

export interface WPMNavInfo {
  deviceMemory: number
  hardwareConcurrency: number
  serviceWorkerStatus: 'unsupported' | 'supported' | 'controlled'
}

export interface WPMNavigationTiming {
  redirect?: number
  dns_lookup?: number
  tcp_connection?: number
  ssl_connection?: number
  ttfb?: number
  download_time?: number
  dom_parsed?: number
  loadend?: number
  total_loaded?: number
  dom_ready?: number
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