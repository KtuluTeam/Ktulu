import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const ShowCardView = ({number, index, cards, onSubmit}) => {
  console.log("rendering ShowCardView")
  let card = cards[index].role
  return (
    <View>
    <Text>
    {index}
    {card}
    </Text>
    <Text>
    Podaj imię:
    </Text>
      <Button title="Zatwierdź i ukryj kartę" onPress={onSubmit} />
    </View>
  );
}

export default ShowCardView
