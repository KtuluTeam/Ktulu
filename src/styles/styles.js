import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  footer: {height: 100, flexDirection: 'row', position: 'absolute', top: 550},
  choiceImage: {width: 100, height: 100, left: 50},
  choiceOpacity: {width: 200},
  nextImage: {width: 100, height: 100, left: 150},
  nextOpacity: {width: 400},
  handbookImage: {width: 80, height: 80, left: 10},
  menuOpacity: {width: 100},
  header: {height: 130, flexDirection: 'row', top: 20},
  statueHolderView: {height: 80, flexDirection: 'column', top: 5, left: 10},
  statueHolderText: {fontSize: 16},

  // Background colors
  dayBG: { backgroundColor: '#fff1c1', height: 1000 },
  nightBG: { backgroundColor: '#505575', height: 1000 },
  setupBG: { backgroundColor: '#f7f5ed', height: 1000 }
})
