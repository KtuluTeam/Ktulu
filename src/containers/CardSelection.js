import { connect } from 'react-redux'
import { CardSelectionView } from '../components/CardSelectionView'

let mapStateToProps = ({citizens, bandits, indians}) => {
  return { citizens, bandits, indians }
}

let mapDispatchToProps = (dispatch) => {
  return {onSubmit: () => { dispatch({ type: 'SUBMIT' }) }}
}

export const CardSelection = connect(mapStateToProps,
  mapDispatchToProps)(CardSelectionView)
