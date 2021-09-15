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
  delay: 10 * 1000,
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

## Configuration

wpmonit configuration can be managed through params, like `const ins = wpmonit.init(config)`, and use events with Instance!


#### `app: string | required`

Used to identify the APP, required

#### `user: string | required`

Used to identify the user, required

#### `delay: number | optional`

Define how long (ms) will it take to report data automaticly, default is `60 * 1000`

#### `tags: any | optional`

define global tags

#### `dsn: string | optional`

Data-Handle-Server address

#### `callback: Function | optional`

Handle with the data by yourself, <b>dsn will be disable when you set callback</b>
