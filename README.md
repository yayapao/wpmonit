English | [简体中文](./README.zh-CN.md)

# wpmonit 👀

<b>wpmonit</b> means Web Performance Monitor, which can help you collect the web performance related informations at the right time!

This project is generated from [npm-ts-template](https://github.com/Y-lonelY/npm-template/tree/ts).

## Install

run `npm i wpmonit` or `yarn add wpmonit`

## Quick Start

Here is a quick demostration:

```javascript
import WPMonitor from 'wp-monitor'

// transfer the config, actually it will transfer whatever you config!
const wpmonitIns = wpmonit.init({
  app: 'dftApp',
  user: 'dftUser',
  // auto report after delay time range
  delay: 10 * 1000,
  // To send data to Server
  dsn: 'http://target.url.com/api/catchdata',
  tags: {
    browser: 'chrome',
  },
  callback: (data) => {
    console.log(data)
  },
})

wpmonitIns.setConfig({
  user: 'changeUser',
})
```

## Config

In fact, we will return all your-self defined config, but we will store some of it to identify the APP!

- `app: string`: used to identify the APP
- `user: string`: used to identify the user
- `delay: number`: [Optional] define how long (ms) will it take to report data automaticly, default is 60 \* 1000
- `tags: any`: [Optional] define global tags
- `dsn: string`: [Optional] Data-Handle-Server address
- `callback: (data) => void`: [Optional] handle with the data by yourself, <b>dsn will be disable when you set callback</b>

Beside, you can send whatever you need!

## Data Structure

Here is the reported infomation:

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
  fetchTime: number
  appCache: number
  workerTime: number
  networkTime: number
  downloadTime: number
  ttfb: number
  headerSize: number
  dnsLookupTime: number
  deviceMemory: number
  hardwareConcurrency: number
  serviceWorkerStatus: 'unsupported' | 'supported' | 'controlled'

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
