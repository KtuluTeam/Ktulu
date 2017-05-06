import { connect } from 'react-redux'
import { StartOfNightView } from '../components/StartOfNightView'

mapStateToProps = ({statueHolder}) => {
  return {
    statueHolder: statueHolder
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'START' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const StartOfNight = connect(mapStateToProps,
  mapDispatchToProps)(StartOfNightView)
