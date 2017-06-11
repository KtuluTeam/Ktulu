import { cardFactory } from './card'

let citizenFactory = (name, image) => {
  return cardFactory('citizens', name, image)
}

let name = 'Miastowi'

let sheriff = citizenFactory('Szeryf', require('../../img/kartaszeryf.jpg'))
let goodGunslinger = citizenFactory('Dobry Rewolwerowiec', require('../../img/kartadobryrewolwerowiec.jpg'))
let pastor = citizenFactory('Pastor', require('../../img/kartapastor.jpg'))
let insuranceAgent = citizenFactory('Agent Ubezpieczeniowy', require('../../img/kartaagentubezpieczeniowy.jpg'))
let whore = citizenFactory('Dziwka', require('../../img/kartadziwka.jpg'))

export { sheriff, goodGunslinger, pastor, insuranceAgent, whore, name }
