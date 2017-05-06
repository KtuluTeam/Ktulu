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
    { role: 'whore', faction: 'citizens' },
    { role: 'sheriff', faction: 'citizens' },
    { role: 'pastor', faction: 'citizens' },
    { role: 'goodGunslinger', faction: 'citizens' },
    { role: 'insuranceAgent', faction: 'citizens' }
  ],
  bandits: [
    { role: 'evilGunslinger', faction: 'bandit' },
    { role: 'rook', faction: 'bandit' },
    { role: 'thief', faction: 'bandit' },
    { role: 'banditLeader', faction: 'bandit' }
  ],
  indians: [
    { role: 'solitaryCoyote', faction: 'indians' },
    { role: 'warrior', faction: 'indians' },
    { role: 'shaman', faction: 'indians' }
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
    index: 0,
    step: 'HIDDEN_CARD',
    cards: cards
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
      if (state.index === state.number){
        return state
      }
      else{
        return {
          ...state,
          step: 'SHOW_CARD'
        }
      }
    default:
      return state
  }
}

showCard = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        index: state.index + 1,
        step: 'HIDDEN_CARD'
      }
    case 'NAME_INPUT':
      return {
        ...state,
        cards: state.cards.slice(0, state.index).concat([{
          ...state.cards[state.index],
          name: action.name
        }]).concat(state.cards.slice(state.index + 1, state.number))
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
    case 'SHOW_CARD':
      return showCard(state, action)
    default:
      return state
  }
}
