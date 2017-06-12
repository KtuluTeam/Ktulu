import { setup, night, day } from './stages'
import * as tools from './stages/tools'
let { SUCCESS, FAILURE, UNUSED, USED, NO_STATUE_HOLDER } = tools

const initialState = setup.initialSetupState

const checkWinConditions = (state) => {
  console.log('check win', state)
  if(state.stage === 'SETUP'){
    return state
  }
  if(state.stage === 'DAY' && state.statueHolder === NO_STATUE_HOLDER){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'CITIZENS_WON'
    }
  }
  if(tools.indiansAlive(state) > 0 && (tools.banditsAlive(state) + tools.citizensAlive(state)) === 0){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'INDIANS_WON'
    }
  }
  if(state.day >= 3 && state.stage === 'DAY' && state.statueHolder.faction === 'bandits'){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'BANDITS_WON'
    }
  }
  return state
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
