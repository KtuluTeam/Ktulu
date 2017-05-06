import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import * as cards from '../cards'

console.log("CARDS: ", cards)

FactionCards = ({faction, displayFaction, cardsSelection}) => {
  console.log("rendering", faction, cardsSelection)
  console.log("cards:", cards[faction])
  return (
    <View>
      <Text>
        {displayFaction}:
      </Text>
      <View>
        { cardsSelection.map((cardSelection) => {
            return (
              <View key={cards[faction][cardSelection.role].name}>
                <Text>
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
      <FactionCards faction="citizens" displayFaction="Miastowi"
        cardsSelection={citizens} />
        <Text>______________
        </Text>
      <FactionCards faction="bandits" displayFaction="Bandyci"
        cardsSelection={bandits} />
        <Text>______________
        </Text>
      <FactionCards faction="indians" displayFaction="Indianie"
        cardsSelection={indians} />
        <Button title="Zatwierdź" onPress={onSubmit} />
    </View>
  )
}
