import * as wpmonit from './index'
// 暴露对外入口
;((config) => {
  const wpmonitIns = wpmonit.init({
    ...config,
    delay: 5 * 1000,
  })
  wpmonitIns.setConfig({
    user: 'hello'
  })
})({ app: 'test', user: 'ylonely', dsn: 'http://127.0.0.1:3007/api/perf' })
