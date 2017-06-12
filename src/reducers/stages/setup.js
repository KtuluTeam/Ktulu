import { initialNightState } from './night'
import * as tools from './tools'
let { NO_STATUE_HOLDER } = tools

export const initialSetupState = {
  stage: 'SETUP',
  step: 'NUMBER_PLAYERS',
  number: 12,
  statueHolder: NO_STATUE_HOLDER
}

let initialFactionSizesState = {
  step: 'FACTION_SIZES',
  citizens: 5,
  bandits: 4,
  indians: 3
}

let initialFactionCardsState = {
  step: 'FACTION_CARDS',
  citizens: [
    { role: 'whore', faction: 'citizens', used: 0, alive: true, name: 'dziwka_' },
    { role: 'sheriff', faction: 'citizens', used: 0, alive: true, name: 'szeryf_' },
    { role: 'pastor', faction: 'citizens', used: 0, alive: true, name: 'pastor_' },
    { role: 'goodGunslinger', faction: 'citizens', used: 0, alive: true, name: 'dobryrev_' },
    { role: 'insuranceAgent', faction: 'citizens', used: 0, alive: true, name: 'agent_' }
  ],
  bandits: [
    { role: 'evilGunslinger', faction: 'bandits', used: 0, alive: true, name: 'zlyrev_' },
    { role: 'avenger', faction: 'bandits', used: 0, alive: true, name: 'msciciel_' },
    { role: 'thief', faction: 'bandits', used: 0, alive: true, name: 'zlodziej_' },
    { role: 'banditLeader', faction: 'bandits', used: 0, alive: true, name: 'herszt_' }
  ],
  indians: [
    { role: 'solitaryCoyote', faction: 'indians', used: 0, alive: true, name: 'kojot_' },
    { role: 'warrior', faction: 'indians', used: 0, alive: true, name: 'wojownik_' },
    { role: 'shaman', faction: 'indians', used: 0, alive: true, name: 'szaman_' }
  ]
}

let numberPlayers = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      return {
        ...state,
        ...initialFactionSizesState
      }
    default:
      return state
  }
}

let factionSizes = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      return {
        ...state,
        ...initialFactionCardsState
      }
    default:
      return state
  }
}

let shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]]
  }
  return a
}

let initialHiddenCardState = (state) => {
  let cards = shuffle(state.citizens.concat(state.bandits).concat(state.indians))
  console.log(cards)
  return {
    ...state,
    index: 0,
    step: 'HIDDEN_CARD',
    cards: cards
  }
}

let factionCards = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      return initialHiddenCardState(state)
    default:
      return state
  }
}

let hiddenCard = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      if (state.index === state.number) {
        return initialNightState(state)
      } else {
        return {
          ...state,
          step: 'SHOW_CARD'
        }
      }
    default:
      return state
  }
}

let showCard = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      return {
        ...state,
        // index: state.index + 1,
        index: 12,
        step: 'HIDDEN_CARD'
      }
    case 'NAME_INPUT':
      return {
        ...state,
        cards: state.cards.slice(0, state.index).concat([{
          ...state.cards[state.index],
          name: action.name,
          alive: true,
          used: 0
        }]).concat(state.cards.slice(state.index + 1, state.number))
      }
    default:
      return state
  }
}

export const setup = (state, action) => {
  switch (state.step) {
    case 'MENU':
      return tools.menu(state, action)
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
