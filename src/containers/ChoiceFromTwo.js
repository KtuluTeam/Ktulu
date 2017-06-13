import { connect } from 'react-redux'
import { ChoiceFromTwoView } from '../components/ChoiceFromTwoView'

let mapStateToProps = ({statueHolder, text, instruction, participant1,
  participant2}) => {
  return {
    statueHolder: statueHolder,
    text: text,
    instruction,
    participant1,
    participant2
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onSelect: (selection) => { dispatch({ type: 'CHOSE_FROM_TWO',
      chosenFromTwo: selection }) },
  }
}

export const ChoiceFromTwo = connect(mapStateToProps,
  mapDispatchToProps)(ChoiceFromTwoView)

