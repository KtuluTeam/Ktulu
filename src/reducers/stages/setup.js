export const initialSetupState = {
  stage: 'SETUP',
  step: 'NUMBER_PLAYERS',
  number: 12
}

initialFactionSizesState = {
  step: 'FACTION_SIZES',
  citizens: 5,
  bandits: 4,
  indians: 3
}

initialFactionCardsState = {
  step: 'FACTION_CARDS',
  citizens: [
    { role: 'whore' },
    { role: 'sheriff' },
    { role: 'pastor' },
    { role: 'goodGunslinger' },
    { role: 'insuranceAgent' }
  ],
  bandits: [
    { role: 'evilGunslinger' },
    { role: 'rook' },
    { role: 'thief' },
    { role: 'banditLeader' }
  ],
  indians: [
    { role: 'solitaryCoyote' },
    { role: 'warrior' },
    { role: 'shaman' }
  ]
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

factionSizes = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        ...initialFactionCardsState
      }
    default:
      return state
  }
}

factionCards = (state, action) => {
  return state
}

export const setup = (state, action) => {
  switch (state.step) {
    case 'NUMBER_PLAYERS':
      return numberPlayers(state, action)
    case 'FACTION_SIZES':
      return factionSizes(state, action)
    case 'FACTION_CARDS':
      return factionCards(state, action)
    default:
      return state
  }
}
