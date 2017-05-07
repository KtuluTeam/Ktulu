import { connect } from 'react-redux'
import { ChoiceView } from '../components/ChoiceView'

mapStateToProps = ({from, statueHolder, choosen}) => {
  return {
    chooseFrom: from,
    statueHolder: statueHolder,
    choosen: choosen
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onSelection: (choosen) => { dispatch({ type: 'SELECT', choosen: choosen}) }
  }
}

export const Choice = connect(mapStateToProps,
  mapDispatchToProps)(ChoiceView)
