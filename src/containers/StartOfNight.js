import { connect } from 'react-redux'
import { StartOfNightView } from '../components/StartOfNightView'

let mapStateToProps = ({statueHolder}) => {
  return {
    statueHolder: statueHolder
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const StartOfNight = connect(mapStateToProps,
  mapDispatchToProps)(StartOfNightView)
