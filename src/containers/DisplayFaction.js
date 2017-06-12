import { connect } from 'react-redux'
import { DisplayFactionView } from '../components/DisplayFactionView'
import { NO_STATUE_HOLDER } from '../reducers/stages/tools'

let mapStateToProps = ({text, statueHolder, who}) => {
  return {
    text: text,
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

export const DisplayFaction = connect(mapStateToProps,
  mapDispatchToProps)(DisplayFactionView)
