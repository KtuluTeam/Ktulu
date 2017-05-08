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
    onNo: () => { dispatch({ type: 'CHOICE', choice: false }) },
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onYes: () => { dispatch({ type: 'CHOICE', choice: true }) }
  }
}

export const Choice = connect(mapStateToProps,
  mapDispatchToProps)(ChoiceView)
