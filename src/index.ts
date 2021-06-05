import { config } from './config'
import { isSupportedWP, collectInfo } from './atom/main'
import { getState, logStateChange } from './atom/lifecircle'
import { Options } from './index.d'
import { initCoreVitals } from './atom/coreVitals'
import { omit } from 'lodash'

class WPMonit {
  private v = '0.0.3'
  constructor(opts: Partial<Options> = {}) {
    this.setConfig(opts)
  }

  // trigger - 上报时机, config - 用户配置, info - WPM messages
  private report(trigger: string) {
    const info = collectInfo()
    const data = {
      trigger,
      ...config,
      ...info,
    }
    const { dsn, callback } = config

    // if define callback then trigger and return
    if (typeof callback === 'function') {
      callback && callback(omit(data, ['callback']))
      return
    }

    try {
      const res = navigator.sendBeacon(dsn, JSON.stringify(data))
      // write in queue failed, then fetch the data
      if (!res) {
        fetch(dsn, {
          body: JSON.stringify(data),
          cache: 'no-cache',
          method: 'POST',
        })
      }
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

    // pageview state
    let state = getState()
    // setTimer to push data
    setTimeout(() => {
      this.report('timer')
    }, config.delay)

    window.addEventListener(
      'pagehide',
      (event) => {
        if (event.persisted) {
          state = logStateChange('frozen', state)
        } else {
          state = logStateChange('terminated', state)
          // before unload trigger
          this.report('terminated')
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

function init(opts: Partial<Options> = {}): WPMonit {
  const wpmonit = new WPMonit(opts)
  wpmonit.start()
  return wpmonit
}

export { init }
