import { connect } from 'react-redux'
import { DisplayFactionView } from '../components/DisplayFactionView'


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

export const DisplayFaction = connect(mapStateToProps,
  mapDispatchToProps)(DisplayFactionView)
