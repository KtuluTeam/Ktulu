import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from './src/reducers/main'
import { Game } from './src/containers/Game'

let store = createStore(mainReducer)

export default class Ktulu extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Game />
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Ktulu', () => Ktulu)
