import { connect } from 'react-redux'
import { StartDayView } from '../components/StartDayView'

let mapStateToProps = ({statueHolder, duels}) => {
  return {
    statueHolder,
    duels
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onDuel: () => { dispatch({ type: 'TO_DUEL' }) },
    onSearch: () => { dispatch({ type: 'TO_SEARCH' }) }
  }
}

export const StartDay = connect(mapStateToProps,
  mapDispatchToProps)(StartDayView)
