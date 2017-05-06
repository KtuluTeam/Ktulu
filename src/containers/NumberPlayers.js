import { connect } from 'react-redux'
import { NumberPlayersView } from '../components/NumberPlayersView'

mapStateToProps = ({number}) => {
  return {
    number: number
  }
}

mapDispatchToProps = (dispatch) => {
  return {}
}

export const NumberPlayers = connect(mapStateToProps,
  mapDispatchToProps)(NumberPlayersView)
