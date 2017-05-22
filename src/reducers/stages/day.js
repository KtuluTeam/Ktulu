import { nextNightState } from './night'

export const nextDayState = (state) => {
  return {
    ...state,
    stage: 'DAY',
    step: 'START_OF_DAY',
    tableIndex: 0
  }
}
