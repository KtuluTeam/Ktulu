import { connect } from 'react-redux'
import { WakeUpByNameView } from '../components/WakeUpByNameView'

let mapStateToProps = ({text, statueHolder, who}) => {
  return {
    text: text,
    statueHolder: statueHolder,
    who: who
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const WakeUpByName = connect(mapStateToProps,
  mapDispatchToProps)(WakeUpByNameView)
