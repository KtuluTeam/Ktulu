import React from 'react'
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { styles } from '../styles/styles'

let yesImg = require('../../img/icons/yes.png')
let noImg = require('../../img/icons/no.png')

export const ChoiceFooter = ({onYes, onNo}) => {
  return (
    <View style={styles.footer} >
      <TouchableOpacity onPress={onYes} style={styles.choiceOpacity} >
        <Image source={yesImg} style={styles.choiceImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNo} style={styles.choiceOpacity} >
        <Image source={noImg} style={styles.choiceImage} />
      </TouchableOpacity>
    </View>
  )
}

let nextImg = require('../../img/icons/right.png')

export const NextFooter = ({onPress}) => {
  return (
    <View style={styles.footer} >
      <TouchableOpacity onPress={onPress} style={styles.nextOpacity} >
        <Image source={nextImg} style={styles.nextImage} />
      </TouchableOpacity>
    </View>
  )
}
