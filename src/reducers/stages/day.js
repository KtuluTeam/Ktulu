import { nextNightState } from './night'

export const nextDayState = (state) => {
  return {
    ...state,
    stage: 'DAY',
    step: 'START_OF_DAY',
    tableIndex: 0
  }
}

let startOfDay = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state);
    case 'NEXT':
      return {
        ...state
      }
    default:
      return state;
  }
}


export const day = (state, action) => {
  switch (state.step) {
    case 'START_OF_DAY':
      return startOfDay(state, action)
    default:
      return state
  }
}
