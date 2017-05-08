import { connect } from 'react-redux'
import { DisplayCardView } from '../components/DisplayCardView'


mapStateToProps = ({text, statueHolder, who}) => {
  return {
    text: text,
    statueHolder: statueHolder,
    who: who
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const DisplayCard = connect(mapStateToProps,
  mapDispatchToProps)(DisplayCardView)
