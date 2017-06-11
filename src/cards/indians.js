import { cardFactory } from './card'

let indianFactory = (name, imageFileName) => {
  return cardFactory('indian', name, imageFileName)
}

let name = 'Indianie'

let solitaryCoyote = indianFactory('Samotny Kojot', require('../../img/kartasamotnykojot.jpg'))
let warrior = indianFactory('Wojownik', require('../../img/kartawojownik.jpg'))
let shaman = indianFactory('Szaman', require('../../img/kartaszaman.jpg'))

export { solitaryCoyote, warrior, shaman, name }
