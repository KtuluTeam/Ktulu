import { setup, night, day } from './stages'
import * as tools from './stages/tools'
let { SUCCESS, FAILURE, UNUSED, USED, NO_STATUE_HOLDER } = tools

const initialState = setup.initialSetupState

const checkWinConditions = (state) => {
  if(state.stage === 'SETUP'){
    return state
  }
  if(state.stage === 'DAY' && state.statueHolder === NO_STATUE_HOLDER){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'GAME_OVER',
      winner: 'citizens'
    }
  }
  if(tools.indiansAlive(state) > 0 && (tools.banditsAlive(state) + tools.citizensAlive(state)) === 0){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'GAME_OVER',
      winner: 'indians'
    }
  }
  if(state.day >= 3 && state.stage === 'DAY' && state.statueHolder.faction === 'bandits'){
    return {
      ...state,
      stage: 'GAME_OVER',
      step: 'GAME_OVER',
      winner: 'bandits'
    }
  }
  return state
}

const gameOver = (state, action) => {
  if (state.step === 'MENU') {
    return tools.menu(state, action)
  }

  switch(action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'NEW_GAME':
      return initialState
    default:
      return state
  }
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
      return gameOver(newState, action)
    default:
      return newState
  }
}

export default { mainReducer }
