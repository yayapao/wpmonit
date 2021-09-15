# Metrics

Here is the collected metrics:

```javascript
{
  timeOrigin: number
  href: string

  // core web vitals
  fp: number
  fcp: number
  tbt: number
  lcp: number
  fid: number
  cls: number

  // memory metric
  jsHeapSizeLimit: number
  totalJSHeapSize: number
  usedJSHeapSize: number

  // nav metric
  redirect: number
  dns_lookup: number
  tcp_connection: number
  ssl_connection: number
  ttfb: number
  download_time: number
  dom_parsed: number
  loadend: number
  total_loaded: number
  dom_ready: number

  // network metric
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean

  // screen metric
  width: number
  height: number
  pixelDepth: number
  colorDepth: number

  // os metric
  browser: {
    name: string
    version: string
    major: string
  }
  os: {
    name: string
    version: string
  }
  engine: {
    name: string
    version: string
  }
}
```


## 