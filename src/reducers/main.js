import { setup, night, day } from './stages'

const initialState = setup.initialSetupState

const checkWinConditions = (state) => {
  return state
  //todo
}

export const mainReducer = (state = initialState, action) => {
  let newState = checkWinConditions(state)
  switch (newState.stage) {
    case 'SETUP':
      return setup.setup(state, action)
    case 'NIGHT':
      return night.night(state, action)
    case 'DAY':
      return day.day(state, action)
    case 'GAME_OVER':
      return newState
    default:
      return newState
  }
}

export default { mainReducer }
