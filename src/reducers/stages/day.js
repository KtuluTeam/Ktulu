import { nextNightState } from './night'
import * as tools from './tools'
import * as cards from '../../cards'

let { SUCCESS, FAILURE, UNUSED, USED, NO_STATUE_HOLDER } = tools

export const nextDayState = (state) => {
  return {
    ...state,
    stage: 'DAY',
    step: 'START_OF_DAY',
    tableIndex: 0,
    duels: 0,
    inPrison: undefined,
    day: state.day + 1
  }
}

let search = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      if(state.searchSelection === 1){
        return {
          ...state,
          participant1: state.choosen,
          step: 'SEARCH',
          substep: 'SELECTION',
          instruction: 'Wybierz drugą osobę do przeszukania',
          text: '',
          searchSelection: 2,
          from: tools.selectFromWakeableExcept([state.choosen], state),
          choosen: tools.selectFromWakeableExcept([state.choosen], state)[0]
        }
      }
      else{
        let statueHolder = state.statueHolder
        let participant2 = state.choosen
        if(state.statueHolder.role === state.participant1.role || state.statueHolder.role === participant2.role){
          statueHolder = undefined
        }
        return{
          ...state,
          participant2: state.choosen,
          step: 'SEARCH',
          substep: 'SEARCH_RESULTS',
          instruction: 'Ogłoś wyniki przeszukania',
          text: 'Kto przegrał pojedynek?',
          searchResult1: state.statueHolder.role === state.participant1.role,
          searchResult2: state.statueHolder.role === participant2.role,
          statueHolder: statueHolder
        }
      }
    case 'SELECT':
      return{
        ...state,
        choosen: action.choosen
      }
    case 'NEXT':
      return{
        ...state,
        step: 'HANGING',
        substep: 'CHOICE'
      }
  }
}

let isGunslinger = (card) => {
  return card.role === 'goodGunslinger' || card.role === 'evilGunslinger'
}

let getDuelLoser = (participant1, participant2, chosenFromTwo, state) => {
  let diesFirst = false
  let diesSecond = false
  for (let participant of chosenFromTwo) {
    if(participant.role === participant1.role){
      diesFirst = true
    }
    else if(participant.role === participant2.role){
      diesSecond = true
    }
  }
  if(isGunslinger(participant1) && !isGunslinger(participant2) && diesFirst){
    return [participant2]
  }
  else if(isGunslinger(participant2) && !isGunslinger(participant1) && diesSecond){
    return [participant1]
  }
  return chosenFromTwo
}

let duel = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      if(state.duelSelection === 1){
        return {
          ...state,
          participant1: state.choosen,
          step: 'DUEL',
          substep: 'SELECTION',
          instruction: 'Wybierz wyzywanego na pojedynek',
          text: '',
          duelSelection: 2,
          from: tools.selectFromWakeableExcept([state.choosen], state),
          choosen: tools.selectFromWakeableExcept([state.choosen], state)[0]
        }
      }
      else{
        return{
          ...state,
          participant2: state.choosen,
          step: 'DUEL',
          substep: 'CHOICE_FROM_TWO',
          instruction: 'Przeprowadź dyskusję i głosowanie',
          text: 'Kto przegrał pojedynek?',

        }
      }
    case 'SELECT':
      return{
        ...state,
        choosen: action.choosen
      }
    case 'CHOSE_FROM_TWO':
      let chosenFromTwo = getDuelLoser(state.participant1, state.participant2, action.chosenFromTwo, state)
      let text = ''
      let s = Object.assign({}, state)
      if(chosenFromTwo.length === 0){
        text = 'Remis. Nikt nie ginie'
      }
      else if (chosenFromTwo.length === 2) {
        text = 'Remis. Giną ' + chosenFromTwo[0].name + '(' + cards[chosenFromTwo[0].faction][chosenFromTwo[0].role].name +
          ') oraz ' + chosenFromTwo[1].name + '(' + cards[chosenFromTwo[1].faction][chosenFromTwo[1].role].name + ')'
          s = tools.killByRole(chosenFromTwo[0].role, s)
          s = tools.killByRole(chosenFromTwo[1].role, s)
          if(s.statueHolder.role === chosenFromTwo[0].role || s.statueHolder.role === chosenFromTwo[1].role){
            s = {
              ...s,
              statueHolder: NO_STATUE_HOLDER
            }
          }
      }
      else{
        text = 'Ginie ' + chosenFromTwo[0].name + '(' + cards[chosenFromTwo[0].faction][chosenFromTwo[0].role].name +
          ')'
        s = tools.killByRole(chosenFromTwo[0].role, s)
        if(s.statueHolder.role === chosenFromTwo[0].role){
          s = {
            ...s,
            statueHolder: NO_STATUE_HOLDER
          }
        }
      }
      return {
        ...s,
        chosenFromTwo: chosenFromTwo,
        substep: 'INSTRUCTION',
        instruction: 'Ogłoś kto ginie',
        text: text
      }
    case 'NEXT':
      return{
        ...state,
        step: 'START_OF_DAY'
      }
  }
}


let hanging = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'SUBMIT':
      if(state.duelSelection === 1){
        return {
          ...state,
          participant1: state.choosen,
          step: 'DUEL',
          substep: 'SELECTION',
          instruction: 'Wybierz wyzywanego na pojedynek',
          text: '',
          duelSelection: 2,
          from: tools.selectFromWakeableExcept([state.choosen], state),
          choosen: tools.selectFromWakeableExcept([state.choosen], state)[0]
        }
      }
      else{
        return{
          ...state,
          participant2: state.choosen,
          step: 'DUEL',
          substep: 'CHOICE_FROM_TWO',
          instruction: 'Przeprowadź dyskusję i głosowanie',
          text: 'Kto przegrał pojedynek?',

        }
      }
    case 'SELECT':
      return{
        ...state,
        choosen: action.choosen
      }
    case 'CHOSE_FROM_TWO':
      let chosenFromTwo = getDuelLoser(state.participant1, state.participant2, action.chosenFromTwo, state)
      let text = ''
      let s = Object.assign({}, state)
      if(chosenFromTwo.length === 0){
        text = 'Remis. Nikt nie ginie'
      }
      else if (chosenFromTwo.length === 2) {
        text = 'Remis. Giną ' + chosenFromTwo[0].name + '(' + cards[chosenFromTwo[0].faction][chosenFromTwo[0].role].name +
          ') oraz ' + chosenFromTwo[1].name + '(' + cards[chosenFromTwo[1].faction][chosenFromTwo[1].role].name + ')'
          s = tools.killByRole(chosenFromTwo[0].role, s)
          s = tools.killByRole(chosenFromTwo[1].role, s)
          if(s.statueHolder.role === chosenFromTwo[0].role || s.statueHolder.role === chosenFromTwo[1].role){
            s = {
              ...s,
              statueHolder: NO_STATUE_HOLDER
            }
          }
      }
      else{
        text = 'Ginie ' + chosenFromTwo[0].name + '(' + cards[chosenFromTwo[0].faction][chosenFromTwo[0].role].name +
          ')'
        s = tools.killByRole(chosenFromTwo[0].role, s)
        if(s.statueHolder.role === chosenFromTwo[0].role){
          s = {
            ...s,
            statueHolder: NO_STATUE_HOLDER
          }
        }
      }
      return {
        ...s,
        chosenFromTwo: chosenFromTwo,
        substep: 'INSTRUCTION',
        instruction: 'Ogłoś kto ginie',
        text: text
      }
    case 'NEXT':
      return{
        ...state,
        step: 'START_OF_DAY'
      }
  }
}


let startOfDay = (state, action) => {
  switch (action.type) {
    case 'MENU':
      return tools.getMenu(state)
    case 'TO_SEARCH':
      return {
        ...state,
        step: 'SEARCH',
        substep: 'SELECTION',
        instruction: 'Wybierz pierwszą osobę do przeszukania',
        text: '',
        searchSelection: 1,
        from: tools.selectFromWakeableExcept([], state),
        choosen: tools.selectFromWakeableExcept([], state)[0]
      }
    case 'TO_DUEL':
      return {
        ...state,
        step: 'DUEL',
        substep: 'SELECTION',
        instruction: 'Wybierz wyzywającego na pojedynek',
        text: '',
        duelSelection: 1,
        duels: state.duels + 1,
        from: tools.selectFromWakeableExcept([], state),
        choosen: tools.selectFromWakeableExcept([], state)[0]
      }
    default:
      return state;
  }
}

export const day = (state, action) => {
  switch (state.step) {
    case 'START_OF_DAY':
      return startOfDay(state, action)
    case 'DUEL':
      return duel(state, action)
    case 'SEARCH':
      return search(state, action)
    case 'HANGING':
      return hanging(state, action)
    default:
      return state
  }
}
