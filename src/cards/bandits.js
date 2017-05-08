import { cardFactory } from './card'

banditFactory = (name, imageFileName) => {
  return cardFactory("bandits", name, imageFileName)
}

name = "Bandyci"

evilGunslinger = banditFactory("Zły Rewolwerowiec", require("../../img/kartazlyrewolwerowiec.jpg"))
avenger = banditFactory("Mściciel", require("../../img/kartamsciciel.jpg"))
thief = banditFactory("Złodziej", require("../../img/kartazlodziej.jpg"))
banditLeader = banditFactory("Herszt", require("../../img/kartaherszt.jpg"))

export { evilGunslinger, avenger, thief, banditLeader, name }
