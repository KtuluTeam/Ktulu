import React from 'react'
import { connect } from 'react-redux'
import { viewMap } from '../containers'

GameView = ({stage, step}) => {
  return viewMap[stage][step]()
}

mapStateToProps = ({stage, step}) => {
  return {
    stage: stage,
    step: step
  }
}

export const Game = connect(mapStateToProps, () => { return {} })(GameView)
