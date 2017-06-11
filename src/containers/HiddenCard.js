import { connect } from 'react-redux'
import { HiddenCardView } from '../components/HiddenCardView'

let mapStateToProps = ({index, number}) => {
  return {
    index: index,
    number: number
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) }
  }
}

export const HiddenCard = connect(mapStateToProps,
  mapDispatchToProps)(HiddenCardView)
