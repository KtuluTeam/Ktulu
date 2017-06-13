import React from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import { viewMap } from '../containers'
import { styles } from '../styles/styles'
import { Top } from '../components'

let GameView = ({stage, step, substep}) => {
  let GameScreen
  if (viewMap[stage][step].hasSubsteps === undefined) {
    GameScreen = viewMap[stage][step]
  } else {
    GameScreen = viewMap[stage][step][substep]
  }
  let stageStyle = styles.nightBG
  if (stage === 'DAY') {
    stageStyle = styles.dayBG
  } else if (stage === 'SETUP') {
    stageStyle = styles.setupBG
  } else if (stage === 'GAME_OVER') {
    stageStyle = styles.endBG
  }
  return (
    <View style={stageStyle}>
      <Top />
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
