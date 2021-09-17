import { WN } from './constant'
import parser from 'ua-parser-js'
import { pick } from 'lodash'

export function getUserAgentInfo() {
  const ua = parser(WN.userAgent)
  const res = pick(ua, ['browser', 'engine', 'os'])
  return res
}