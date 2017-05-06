import { connect } from 'react-redux'
import { ChoiceView } from '../components/ChoiceView'

mapStateToProps = ({from, statueHolder}) => {
  return {
    from: from,
    statueHolder: statueHolder
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const Choice = connect(mapStateToProps,
  mapDispatchToProps)(ChoiceView)
