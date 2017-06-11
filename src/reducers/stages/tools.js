export let SUCCESS = 1
export let FAILURE = -1
export let UNUSED = 0
export let USED = 1

export let isAlive = (character, state) => {
  for (let card of state.cards) {
    if (card.role === character) {
      return card.alive
    }
  }
  return false
}

export let isWakeable = (character, state) => {
  return isAlive(character, state) && (state.inPrison === undefined || state.inPrison.role !== character)
}

export let isCardWakeable = (card, state) => {
  return card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role)
}

export let factionMembersAlive = (faction, state) => {
  let counter = 0
  for (let card of state.cards) {
    if (card.faction === faction && card.alive) {
      counter++
    }
  }
  return counter
}

export let factionMembersWakeable = (faction, state) => {
  let counter = 0
  for (let card of state.cards) {
    if (card.faction === faction && card.alive && state.inPrison !== card.role) {
      counter++
    }
  }
  return counter
}

export let banditsAlive = (state) => {
  return factionMembersAlive('bandits', state)
}

export let indiansAlive = (state) => {
  return factionMembersAlive('indians', state)
}

export let citizensAlive = (state) => {
  return factionMembersAlive('citizens', state)
}

export let banditsWakeable = (state) => {
  return factionMembersWakeable('bandits', state)
}

export let indiansWakeable = (state) => {
  return factionMembersWakeable('indians', state)
}

export let citizensWakeable = (state) => {
  return factionMembersWakeable('citizens', state)
}

export let getFactionMembers = (faction, state) => {
  let array = []
  for (let card of state.cards) {
    if (card.faction === faction && card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role)) {
      array.push(card)
    }
  }
  return array
}

export let getMenu = (state) => {
  return {
    ...state,
    step: 'MENU',
    last_step: state.step,
    last_substep: state.substep
  }
}

export let menu = (state, action) => {
  switch (action.type) {
    case 'RETURN':
      return {
        ...state,
        step: state.last_step,
        substep: state.last_substep
      }
    default:
      return state
  }
}

export let isInExcept = (character, except) => {
  for (let e of except) {
    if (e.role === character) {
      return true
    }
  }
  return false
}

export let selectFromWakeableExcept = (except, state) => {
  return state.cards.filter((card) => {
    return isCardWakeable(card, state) && !isInExcept(card.role, except)
  })
  // return selectFrom;
}

export let getCardByRole = (cards, role) => {
  for (let card of cards) {
    if (card.role === role) {
      return card
    }
  }
}

export let killByRole = (role, state) => {
  return {
    ...state,
    cards: state.cards.map((card) => {
      if (card.role === role) {
        return {
          ...card,
          alive: false
        }
      } else {
        return card
      }
    })
  }
}
