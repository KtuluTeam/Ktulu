import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'


export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <ReadLoud text={text} />
      <ManitouInfo text={'Obudź uczestnika: ' + who.name + ' POPRZEZ DOTKNIĘCIE'} />
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
