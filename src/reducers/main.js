import { setup } from './stages'

const initialState = setup.initialSetupState

export const mainReducer = (state = initialState, action) => {
  switch (state.stage) {
    case 'SETUP':
      return setup.setup(state, action)
    default:
      return state
  }
}

export default { mainReducer }
