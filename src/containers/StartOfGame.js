import { connect } from 'react-redux'
import { StartOfGameView } from '../components/StartOfGameView'

let mapStateToProps = ({statueHolder}) => {
  return {
    statueHolder: statueHolder
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'START' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const StartOfGame = connect(mapStateToProps,
  mapDispatchToProps)(StartOfGameView)
