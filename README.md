# wpmonit🦀

wpmonit means <strong>Web Performance Monitor</strong>, which can help you collect the web performance related informations at the right time!

## Getting started

Install the module: `npm i wpmonit` or `yarn add wpmonit`

### Quick Start

Here is a quick demostration:

```javascript
import WPMonitor from 'wp-monitor'

const wpmonitIns = wpmonit.init({
  app: 'defaultApplication',
  user: 'defaultUser',
  delay: 60 * 1000,
  dsn: 'http://target.url.com/api/catchdata',
  tags: {
    browser: 'chrome',
  },
  resMaxSize: 2,
  resMaxDuration: 2,
  autoSendSR: true,
  callback: (data) => {
    console.log(data)
  },
})

wpmonitIns.setConfig({
  user: 'changeUser',
})
```

see [collection metrics](./docs/metrics.md) to check the collection info!


## Configuration

wpmonit configuration can be managed through params, like `const ins = wpmonit.init(config)`, and use events with Instance!

#### `app: string | required`

Used to identify the APP, required

#### `user: string | optional`

Used to identify the user, required

#### `delay: number | optional`

Define how long (ms) will it take to report data automaticly, default is `60 * 1000`

#### `tags: any | optional`

define global tags

#### `autoSendSR: boolean | optional | default: true`

Disable or enable the method to auto send the suspicious resources!

You can config the `resMaxSize` and `resMaxDuration` to control the report limit!

#### `resMaxSize: number | optional | default: 2`

When size of resource greater is than resMaxSize, the data will be reported, unit is mB!

#### `resMaxDuration: number | optional | default: 2`

When duration of resource is greater than resMaxDuration, the data will be reported, unit is second!

#### `dsn: string | optional`

Data-Handle-Server address

#### `callback: Function | optional`

Handle the data by yourself

## Metrics

[Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing)

- Navigation Timing collects performance metrics for HTML documents
- Resource Timing collects performance metrics for document-dependent resources. Stuff like style sheets, scripts, images, et cetera


## Todo

1. SSR collection info
