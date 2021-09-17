export function init(opts: Options): WPMonit

class WPMonit {
  private v: string
  init(opts: Options): void
  setConfig(opts: Partial<Options>): void
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
  user?: string
  delay?: number
  dsn?: string
  tags?: {[index: string]: any}
  // 定义异常资源的标准
  resMaxSize?: number
  resMaxDuration?: number
  // 自动上报异常错误
  autoSendSR?: boolean
  callback?: (data: any) => void
}

export interface WPMNavInfo {
  deviceMemory: number
  hardwareConcurrency: number
  serviceWorkerStatus: 'unsupported' | 'supported' | 'controlled'
}

export interface WPMNavigationTiming {
  redirect?: number
  dns_lookup?: number
  connection_time?: number
  tls_time?: number
  ttfb?: number
  download_time?: number
  dom_parsed?: number
  loadend?: number
  total_loaded?: number
  dom_ready?: number
  transfer_size?: number
  encoded_body_size?: number
  decoded_body_size?: number
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