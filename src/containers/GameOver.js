import { connect } from 'react-redux'
import { GameOverView } from '../components/GameOverView'

let mapStateToProps = ({statueHolder, winner}) => {
  return {
    statueHolder: statueHolder,
    winner
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMenu: () => { dispatch({ type: 'MENU' }) },
    onNewGame: () => { dispatch({ type: "NEW_GAME" }) }
  }
}

export const GameOver = connect(mapStateToProps,
  mapDispatchToProps)(GameOverView)

