export const initialSetupState = {
  stage: 'SETUP',
  step: 'NUMBER_PLAYERS',
  number: 12
}

numberPlayers = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        ...initialFactionSizesState
      }
    default:
      return state
  }
}

export const setup = (state, action) => {
  switch (state.step) {
    case 'NUMBER_PLAYERS':
      return numberPlayers(state, action)
    default:
      return state
  }
}
