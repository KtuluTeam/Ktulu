import { cardFactory } from './card'

indianFactory = (name) => {
  return cardFactory("indian", name);
}

solitaryCoyote = indianFactory("Samotny Kojot")
warrior = indianFactory("Wojownik")
shaman = indianFactory("Szaman")

export { solitaryCoyote, warrior, shaman }
