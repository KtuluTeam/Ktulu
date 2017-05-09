import { cardFactory } from './card'

citizenFactory = (name, image) => {
    return cardFactory("citizens", name, image)
}

name = "Miastowi"


sheriff = citizenFactory("Szeryf", require("../../img/kartaszeryf.jpg"))
goodGunslinger = citizenFactory("Dobry Rewolwerowiec", require("../../img/kartadobryrewolwerowiec.jpg"))
pastor = citizenFactory("Pastor", require("../../img/kartapastor.jpg"))
insuranceAgent = citizenFactory("Agent Ubezpieczeniowy", require("../../img/kartaagentubezpieczeniowy.jpg"))
whore = citizenFactory("Dziwka", require("../../img/kartadziwka.jpg"))

export { sheriff, goodGunslinger, pastor, insuranceAgent, whore, name }
