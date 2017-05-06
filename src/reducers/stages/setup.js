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
    { role: 'whore', faction: 'citizens', alive: true },
    { role: 'sheriff', faction: 'citizens' , alive: true },
    { role: 'pastor', faction: 'citizens' , alive: true },
    { role: 'goodGunslinger', faction: 'citizens' , alive: true },
    { role: 'insuranceAgent', faction: 'citizens' , alive: true }
  ],
  bandits: [
    { role: 'evilGunslinger', faction: 'bandits' , alive: true },
    { role: 'avenger', faction: 'bandits' , alive: true },
    { role: 'thief', faction: 'bandits' , alive: true },
    { role: 'banditLeader', faction: 'bandits', alive: true  }
  ],
  indians: [
    { role: 'solitaryCoyote', faction: 'indians' , alive: true },
    { role: 'warrior', faction: 'indians', alive: true  },
    { role: 'shaman', faction: 'indians', alive: true  }
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
        return {
          ...state,
          stage: 'NIGHT',
          step: 'START_OF_NIGHT',
          statueHolder: null,
          tableIndex: -1,
          day: 0
        }
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
        //index: state.index + 1,
        index: 12,
        step: 'HIDDEN_CARD'
      }
    case 'NAME_INPUT':
      return {
        ...state,
        cards: state.cards.slice(0, state.index).concat([{
          ...state.cards[state.index],
          name: action.name,
          alive: true
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
