import { connect } from 'react-redux'
import { WakeUpByRoleView } from '../components/WakeUpByRoleView'

mapStateToProps = ({text, statueHolder, who}) => {
  return {
    text: text,
    statueHolder: statueHolder,
    who: who
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const WakeUpByRole = connect(mapStateToProps,
  mapDispatchToProps)(WakeUpByRoleView)
