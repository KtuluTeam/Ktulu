import { cardFactory } from './card'

indianFactory = (name) => {
  return cardFactory("indian", name);
}

name = "Indianie"

solitaryCoyote = indianFactory("Samotny Kojot")
warrior = indianFactory("Wojownik")
shaman = indianFactory("Szaman")

export { solitaryCoyote, warrior, shaman, name }
