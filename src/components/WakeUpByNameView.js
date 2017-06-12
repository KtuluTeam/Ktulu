import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'


export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={text} />
      <ManitouInfo text={'Obudź uczestnika: ' + who.name + 'POPRZEZ DOTKNIĘCIE'} />
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
