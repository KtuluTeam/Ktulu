import { connect } from 'react-redux'
import { InstructionView } from '../components/InstructionView'

let mapStateToProps = ({text, statueHolder, instruction}) => {
  return {
    text: text,
    statueHolder: statueHolder,
    instruction: instruction
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const Instruction = connect(mapStateToProps,
  mapDispatchToProps)(InstructionView)
