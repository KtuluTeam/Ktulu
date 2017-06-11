import { connect } from 'react-redux'
import { viewMap } from '../containers'

let GameView = ({stage, step, substep}) => {
  if (viewMap[stage][step].hasSubsteps === undefined) {
    return viewMap[stage][step]()
  } else {
    return viewMap[stage][step][substep]()
  }
}

let mapStateToProps = ({stage, step, substep}) => {
  return {
    stage: stage,
    step: step,
    substep: substep
  }
}

export const Game = connect(mapStateToProps, () => { return {} })(GameView)
