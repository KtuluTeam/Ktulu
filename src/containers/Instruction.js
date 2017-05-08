import { connect } from 'react-redux'
import { InstructionView } from '../components/InstructionView'

mapStateToProps = ({text, statueHolder}) => {
  return {
    text: text,
    statueHolder: statueHolder
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const Instruction = connect(mapStateToProps,
  mapDispatchToProps)(InstructionView)
