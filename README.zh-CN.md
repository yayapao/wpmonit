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

- `app: string`: 用来标记应用
- `user: string`: 用来标记使用者
- `delay: number`: 定义多少毫秒后主动上报，默认 60s,可选
- `tags: any`: [可选] 自定义 tags
- `dsn: string`: [可选] 数据处理服务的地址
- `callback: (data) => void`: [可选] 自定义数据处理程序 <b>注意：当你设置了 callback，dsn 会失效，不再主动请求</b>

此外，你可以传输你需要的数据～

## 数据格式

这里是上报的数据形式：

```javascript
{
  // 进入页面时间戳
  timeOrigin: number
  href: string
  
  // 页面性能黄金指标
  fp: number
  fcp: number
  tbt: number
  lcp: number
  fid: number
  cls: number

  // 内存指标
  jsHeapSizeLimit: number
  totalJSHeapSize: number
  usedJSHeapSize: number

  // 导航信息
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

  // 网络指标
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean

  // 屏幕信息
  width: number
  height: number
  pixelDepth: number
  colorDepth: number

  // 系统信息
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
