import { connect } from 'react-redux'
import { FactionSizesView } from '../components/FactionSizesView'

let mapStateToProps = ({citizens, bandits, indians}) => {
  return { citizens, bandits, indians }
}

let mapDispatchToProps = (dispatch) => {
  return {onSubmit: () => { dispatch({ type: 'SUBMIT' }) }}
}

export const FactionSizes = connect(mapStateToProps,
  mapDispatchToProps)(FactionSizesView)
