import { setup } from './stages'

const initialState = setup.initialSetupState

export const mainReducer = (state = initialState, action) => {
  switch (state.stage) {
    case 'SETUP':
      return setup.setup(state, action)
    case 'NIGHT':
      return night.night(state, action)
    default:
      return state
  }
}

export default { mainReducer }
