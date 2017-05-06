import { connect } from 'react-redux'
import { NumberPlayersView } from '../components/NumberPlayersView'

mapStateToProps = ({number}) => {
  return {
    number: number
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) }
  }
}

export const NumberPlayers = connect(mapStateToProps,
  mapDispatchToProps)(NumberPlayersView)
