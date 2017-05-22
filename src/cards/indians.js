import { cardFactory } from './card'

indianFactory = (name, imageFileName) => {
  return cardFactory("indian", name, imageFileName);
}

name = "Indianie"


solitaryCoyote = indianFactory("Samotny Kojot", require("../../img/kartasamotnykojot.jpg"))
warrior = indianFactory("Wojownik", require("../../img/kartawojownik.jpg"))
shaman = indianFactory("Szaman", require("../../img/kartaszaman.jpg"))

export { solitaryCoyote, warrior, shaman, name }
