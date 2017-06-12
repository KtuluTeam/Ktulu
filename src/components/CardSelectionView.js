import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import * as cards from '../cards'

let FactionCards = ({faction, cardsSelection}) => {
  return (
    <View>
      <ReadLoud
        text={cards[faction].name + ':'}/>
      <View>
        { cardsSelection.map((cardSelection) => {
          return (
            <View key={cards[faction][cardSelection.role].name}>
              <ReadLoud
                text={cards[faction][cardSelection.role].name}/>
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
      <Text>Karty poszczególnych frakcji </Text>
      <FactionCards faction='citizens'
        cardsSelection={citizens} />
      <Text>______________
        </Text>
      <FactionCards faction='bandits'
        cardsSelection={bandits} />
      <Text>______________
        </Text>
      <FactionCards faction='indians'
        cardsSelection={indians} />
      <Button title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}
