import { connect } from 'react-redux'
import { NumberPlayersView } from '../components/NumberPlayersView'

let mapStateToProps = ({number}) => {
  return {
    number: number
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) }
  }
}

export const NumberPlayers = connect(mapStateToProps,
  mapDispatchToProps)(NumberPlayersView)
