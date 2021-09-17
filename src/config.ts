export const config: { [index: string]: any } = {
  app: 'wpm-local-app',
  user: 'wpm-local-user',
  delay: 180 * 1000,
  // n (mB)
  resMaxSize: 2,
  // n s
  resMaxDuration: 2,
  autoSendSR: true,
  dsn: 'http://127.0.0.1:3007/api/perf',
}
