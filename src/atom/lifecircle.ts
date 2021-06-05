import { D } from './constant'

export function getState() {
  if (D.visibilityState === 'hidden') {
    return 'hidden'
  }
  if (D.hasFocus()) {
    return 'active'
  }
  return 'passive'
}

export function logStateChange(nextState: string, prevState: string): string {
  if (nextState !== prevState) {
    // console.log(`State change: ${prevState} >>> ${nextState}`);
  }
  return nextState
};