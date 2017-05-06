import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from './src/reducers/main'
import { Game } from './src/containers/Game'

store = createStore(mainReducer)

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

const styles = StyleSheet.create({
})

AppRegistry.registerComponent('Ktulu', () => Ktulu)
