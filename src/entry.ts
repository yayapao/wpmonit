import * as wpmonit from './index'
// 暴露对外入口
;((config) => {
  const wpmonitIns = wpmonit.init({
    ...config,
    delay: 5 * 1000,
    tags: {
      browser: 'chrome'
    },
    callback: (data) => {
      console.log(data)
    }
  })
  wpmonitIns.setConfig({
    user: 'hello'
  })
})({ app: 'test', user: 'ylonely', dsn: 'http://127.0.0.1:3000/api/perf' })
