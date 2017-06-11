import { connect } from 'react-redux'
import { ChoiceView } from '../components/ChoiceView'

mapStateToProps = ({statueHolder, text}) => {
  return {
    statueHolder: statueHolder,
    text: text
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onNo: () => { dispatch({ type: 'CHOICE', choice: 0 }) },
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onYes: () => { dispatch({ type: 'CHOICE', choice: 1 }) }
  }
}

export const Choice = connect(mapStateToProps,
  mapDispatchToProps)(ChoiceView)
