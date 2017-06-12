import { StyleSheet, Dimensions } from 'react-native'

const backOpacityHeight = 140
const viewHeight = Dimensions.get('window').height - 24
const textField = {margin: 20, padding: 10, backgroundColor: '#fff1c1'}
const text = {textAlign: 'center', textAlignVertical: 'center'}

export const styles = StyleSheet.create({
  footer: {height: 100, flexDirection: 'row', position: 'absolute', top: 550},

  choiceImage: {width: 100, height: 100, left: 50},
  choiceOpacity: {width: 200},

  nextImage: {width: 100, height: 100, left: 150},
  nextOpacity: {width: 400},

  header: {height: 130, flexDirection: 'row', top: 20},
  menuOpacity: {width: 100},
  handbookImage: {width: 80, height: 80, left: 10},
  statueHolderView: {height: 80, flexDirection: 'column', top: 5, left: 10},
  statueHolderText: {fontSize: 16, fontWeight: 'bold'},

  // Background colors
  dayBG: { backgroundColor: '#fff1c1', height: viewHeight },
  nightBG: { backgroundColor: '#505575', height: viewHeight },
  setupBG: { backgroundColor: '#f7f5ed', height: viewHeight },
  endBG: { backgroundColor: '#ff0000', height: viewHeight },

  backImage: {width: 100, height: 100, left: 150},
  backOpacity: {width: 400, height: backOpacityHeight, top: 20},

  handbookScrollView: {height: viewHeight - backOpacityHeight, padding: 5},
  handbookText: { fontSize: 18, color: '#cf0000' },

  readLoud: {borderWidth: 3, ...textField},
  readLoudText: {fontSize: 20, fontWeight: 'bold', ...text},

  manitouInfo: {borderWidth: 1, ...textField},
  manitouInfoText: {fontSize: 14, fontStyle: 'italic', ...text},
})
