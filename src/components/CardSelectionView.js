import React from 'react'
import {
  Text,
  View
} from 'react-native'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'
import { styles } from '../styles/styles'

let FactionCards = ({faction, cardsSelection}) => {
  return (
    <View>
      <Text style={[styles.setupTex, {left: 5}]}>
        {cards[faction].name}:
      </Text>
      <View>
        { cardsSelection.map((cardSelection) => {
          return (
            <View key={cards[faction][cardSelection.role].name}>
              <Text style={{fontSize: 15, left: 10}}>
                {cards[faction][cardSelection.role].name}
              </Text>
            </View>
          )
        }) }
      </View>
    </View>
  )
}

export const CardSelectionView = ({citizens, bandits,
  indians, onSubmit}) => {
  return (
    <View>
      <Text style={styles.setupText}>Karty poszczególnych frakcji </Text>
      <FactionCards faction='citizens'
        cardsSelection={citizens} />
      <Text style={styles.setupText}>______________
        </Text>
      <FactionCards faction='bandits'
        cardsSelection={bandits} />
      <Text style={styles.setupText}>______________
        </Text>
      <FactionCards faction='indians'
        cardsSelection={indians} />
      <NextFooter onPress={onSubmit} />
    </View>
  )
}
