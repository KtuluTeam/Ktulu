import { connect } from 'react-redux'
import { FactionSizesView } from '../components/FactionSizesView'

mapStateToProps = ({citizens, bandits, indians}) => {
  return { citizens, bandits, indians }
}

mapDispatchToProps = (dispatch) => {
  return {}
}

export const FactionSizes = connect(mapStateToProps,
  mapDispatchToProps)(FactionSizesView)
