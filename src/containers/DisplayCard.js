import { connect } from 'react-redux'
import { DisplayCardView } from '../components/DisplayCardView'

let mapStateToProps = ({instruction, statueHolder, who}) => {
  return {
    instruction: instruction,
    statueHolder: NO_STATUE_HOLDER,
    who: who
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const DisplayCard = connect(mapStateToProps,
  mapDispatchToProps)(DisplayCardView)
