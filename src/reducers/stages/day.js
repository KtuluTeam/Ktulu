import { nextNightState } from './night'
import * as tools from './tools'
import * as cards from '../../cards'

let { SUCCESS, FAILURE, UNUSED, USED } = tools

export const nextDayState = (state) => {
  return {
    ...state,
    stage: 'DAY',
    step: 'START_OF_DAY',
    tableIndex: 0,
    duels: 0,
    inPrison: undefined
  }
}

let search = (state, action) => {
  return state
}

let getDuelLoser = (participant1, participant2, chosenFromTwo, state) => {
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
              statueHolder: undefined
            }
          }
      }
      else{
        text = 'Ginie ' + chosenFromTwo[0].name + '(' + cards[chosenFromTwo[0].faction][chosenFromTwo[0].role].name +
          ')'
        s = tools.killByRole(chosenFromTwo[0].role, s)
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
        substep: 'NUMBER_SEARCHED'
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
    default:
      return state
  }
}
