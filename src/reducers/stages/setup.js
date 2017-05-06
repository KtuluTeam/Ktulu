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

shuffle = (a) => {
  for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

initialHiddenCardState = (state) => {
  let cards = shuffle(state.citizens.concat(state.bandits).concat(state.indians))
  console.log(cards)
  return {
    ...state,
    //index: 0,
    step: 'HIDDEN_CARD',
    index: cards
  }
}

factionCards = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return initialHiddenCardState(state)
    default:
      return state
  }
}

hiddenCard = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state
      }
    default:
      return state
  }
}


export const setup = (state, action) => {
  switch (state.step) {
    case 'NUMBER_PLAYERS':
      return numberPlayers(state, action)
    case 'FACTION_SIZES':
      return factionSizes(state, action)
    case 'FACTION_CARDS':
      return factionCards(state, action)
    case 'HIDDEN_CARD':
      return hiddenCard(state, action)
    default:
      return state
  }
}
