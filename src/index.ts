import { config } from './config'
import { isSupportedWP, collectInfo } from './atom/main'
import { getState, logStateChange } from './atom/lifecircle'
import { Options } from './index.d'
import { initCoreVitals } from './atom/coreVitals'
import { omit, pick } from 'lodash'

class WPMonit {
  private v = '0.0.3'
  constructor(opts: Options) {
    this.setConfig(opts)
  }

  // trigger - 上报时机, config - 用户配置, info - WPM messages
  private sendToAnalytics(trigger: string) {
    const info = collectInfo()
    const cnfs = omit(config, ['delay', 'resMaxSize', 'resMaxDuration', 'autoSendSR', 'dsn'])
    const data = {
      trigger,
      ...cnfs,
      ...info,
    }
    const { dsn, callback } = config

    // if define callback then trigger and return
    if (typeof callback === 'function') {
      callback && callback(omit(data, ['callback']))
    }

    try {
      const body = JSON.stringify(data)
      const canReport = dsn && dsn !== ''
      // write in queue failed, then fetch the data
      canReport &&
        (navigator.sendBeacon(dsn, body) ||
          fetch(dsn, {
            body,
            cache: 'no-cache',
            method: 'POST',
          }))
    } catch (error) {
      return
    }
  }

  start() {
    // not support Navigator Timimg API
    if (!isSupportedWP()) {
      return
    }

    initCoreVitals()

    // 1. 主动上报
    setTimeout(() => {
      this.sendToAnalytics('timer')
    }, config.delay)

    // 2. sendBeacon 上报
    window.addEventListener(
      'pagehide',
      (event) => {
        if (!event.persisted) {
          this.sendToAnalytics('terminated')
        }
      },
      { capture: true }
    )
  }

  setConfig(opts: Partial<Options> = {}) {
    Object.entries(opts).map(([key, value]) => {
      config[key] = value
    })
  }
}

function init(opts: Options): WPMonit {
  const { app } = opts

  if (!app || app === '') throw new Error('app is required!')

  const wpmonit = new WPMonit(opts)
  wpmonit.start()
  return wpmonit
}

export { init }
