import { cardFactory } from './card'

let banditFactory = (name, imageFileName) => {
  return cardFactory('bandits', name, imageFileName)
}

let name = 'Bandyci'

let evilGunslinger = banditFactory('Zły Rewolwerowiec', require('../../img/kartazlyrewolwerowiec.jpg'))
let avenger = banditFactory('Mściciel', require('../../img/kartamsciciel.jpg'))
let thief = banditFactory('Złodziej', require('../../img/kartazlodziej.jpg'))
let banditLeader = banditFactory('Herszt', require('../../img/kartaherszt.jpg'))

export { evilGunslinger, avenger, thief, banditLeader, name }
