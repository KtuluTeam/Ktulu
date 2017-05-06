import { cardFactory } from './card'

banditFactory = (name) => {
  return cardFactory("bandits", name)
}

evilGunslinger = banditFactory("Zły Rewolwerowiec")
rook = banditFactory("Szuler")
thief = banditFactory("Złodziej")
banditLeader = banditFactory("Herszt")

export { evilGunslinger, rook, thief, banditLeader }
