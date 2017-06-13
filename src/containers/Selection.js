import { connect } from 'react-redux'
import { SelectionView } from '../components/SelectionView'

let mapStateToProps = ({from, statueHolder, choosen, text, instruction}) => {
  return {
    chooseFrom: from,
    statueHolder: statueHolder,
    choosen: choosen,
    text: text,
    instruction
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onSelection: (choosen) => { dispatch({type: 'SELECT', choosen: choosen}) }
  }
}

export const Selection = connect(mapStateToProps,
  mapDispatchToProps)(SelectionView)
