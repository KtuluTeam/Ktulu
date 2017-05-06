import { cardFactory } from './card'

banditFactory = (name) => {
  return cardFactory("bandits", name)
}

evilGunslinger = banditFactory("Zły Rewolwerowiec")
avenger = banditFactory("Mściciel")
thief = banditFactory("Złodziej")
banditLeader = banditFactory("Herszt")

export { evilGunslinger, avenger, thief, banditLeader }
