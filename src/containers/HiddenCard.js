import { connect } from 'react-redux'
import { HiddenCardView } from '../components/HiddenCardView'

mapStateToProps = ({index, number}) => {
  return {
    index: index,
    number: number
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) }
  }
}

export const HiddenCard = connect(mapStateToProps,
  mapDispatchToProps)(HiddenCardView)
