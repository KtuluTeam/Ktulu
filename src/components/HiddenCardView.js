import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const HiddenCardView = ({number, index, onSubmit}) => {
  console.log("rendering HiddenCardView")
  let text = ''
  if (number === index){
    text = 'Oddaj urządzenie Manitou'
  }
  else{
    text = 'Podaj urządzenie kolejnemu graczowi'
  }
  return (
    <View>
    <Text>
    {text}
    </Text>
      <Button title="Odkryj kartę" onPress={onSubmit} />
    </View>
  );
}

export default HiddenCardView
