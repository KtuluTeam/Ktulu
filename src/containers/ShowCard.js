import { connect } from 'react-redux'
import { ShowCardView } from '../components/ShowCardView'

let mapStateToProps = ({index, number, cards}) => {
  return {
    index: index,
    number: number,
    cards: cards
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) },
    onChangeName: (name) => { dispatch({type: 'NAME_INPUT', name: name}) }
  }
}

export const ShowCard = connect(mapStateToProps,
  mapDispatchToProps)(ShowCardView)
