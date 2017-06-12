import React from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import { viewMap } from '../containers'

let GameView = ({stage, step, substep}) => {
  let GameScreen
  if (viewMap[stage][step].hasSubsteps === undefined) {
    GameScreen = viewMap[stage][step]()
  } else {
    GameScreen = viewMap[stage][step][substep]()
  }
  return (
    <View>
      <GameScreen />
    </View>
  )
}

let mapStateToProps = ({stage, step, substep}) => {
  return {
    stage: stage,
    step: step,
    substep: substep
  }
}

export const Game = connect(mapStateToProps, () => { return {} })(GameView)
