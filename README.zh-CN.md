简体中文 | [English](./README.md)

# wpmonit 👀

<b>wpmonit</b> 表示 Web Performance Monitor, 它能够帮助你在恰当的时机收集性能相关数据并进行上报和处理!

本项目从 [npm-ts-template](https://github.com/Y-lonelY/npm-template/tree/ts) 基于模版进行生产，如果你也想发布一个 npm 包，它会是一个好的开始！

## 安装

执行 `npm i wpmonit` 或者 `yarn add wpmonit`


## 快速开始

这里是一个简单的入门例子：

```javascript
import wpmonit from 'wpmonit'

const wpmonitIns = wpmonit.init({
  app: 'dftApp',
  user: 'dftUser',
  // auto report after delay time range
  delay: 10 * 1000,
  // To send data to Server
  dsn: 'http://target.url.com/api/catchdata',
})

wpmonitIns.setConfig({
  user: 'changeUser',
})
```

## 配置

事实上，它会把你的配置原封不动进行传递，但是我们会用到一些必要的属性来标记应用！

- `app`: 用来标记应用
- `user`: 用来标记使用者
- `delay`: 定义多少毫秒后主动上报，默认 60s,可选
- `dsn`: 定义回调服务地址

此外，你可以传输你需要的数据～

## 数据格式

这里是上报的数据形式：

```javascript
{
  timeOrigin: number
  href: string
  
  // paint metric
  fp: number
  fcp: number
  tbt: number

  // core web vitals
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
}
```
