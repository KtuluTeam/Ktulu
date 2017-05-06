import { cardFactory } from './card'

citizenFactory = (name) => {
    return cardFactory("citizens", name)
}

sheriff = citizenFactory("Szeryf")
goodGunslinger = citizenFactory("Dobry Rewolwerowiec")
pastor = citizenFactory("Pastor")
insuranceAgent = citizenFactory("Agent Ubezpieczeniowy")
whore = citizenFactory("Dziwka")

export { sheriff, goodGunslinger, pastor, insuranceAgent, whore }
