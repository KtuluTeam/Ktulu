isAlive = (character, state) => {
  for(let card of state.cards){
    if(card.role === character){
      return card.alive;
    }
  }
  return false;
}

export { isAlive }

isWakeable = (character, state) => {
  return isAlive(character, state) && (state.inPrison === undefined || state.inPrison.role !== character);
}

export { isWakeable }

isCardWakeable = (card, state) => {
  console.log('isWakeable', card, state.inPrison)
  return card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role);
}

export { isCardWakeable }

factionMembersAlive = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive){
      counter++;
    }
  }
  return counter;
}

export { factionMembersAlive }

factionMembersWakeable = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive && state.inPrison !== card.role){
      counter++;
    }
  }
  return counter;
}

export { factionMembersWakeable }

banditsAlive = (state) => {
  return factionMembersAlive('bandits', state);
}

export { banditsAlive }

indiansAlive = (state) => {
  return factionMembersAlive('indians', state);
}

export { indiansAlive }

citizensAlive = (state) => {
  return factionMembersAlive('citizens', state);
}

export { citizensAlive }

banditsWakeable = (state) => {
  return factionMembersWakeable('bandits', state);
}

export { banditsWakeable }

indiansWakeable = (state) => {
  return factionMembersWakeable('indians', state);
}

export { indiansWakeable }

citizensWakeable = (state) => {
  return factionMembersWakeable('citizens', state);
}

export { citizensWakeable }

getFactionMembers = (faction, state) => {
  let array = []
  for(let card of state.cards){
    if(card.faction === faction && card.alive && (state.inPrison === undefined || state.inPrison.role !== card.role)){
      array.push(card);
    }
  }
  return array;
}

export { getFactionMembers }

let getMenu = (state) => {
  return {
    ...state,
    step: 'MENU',
    last_step: state.step,
    last_substep: state.substep
  }
}

export { getMenu }

let menu = (state, action) => {
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

export { menu }


let isInExcept = (character, except) => {
  for(let e of except){
    if(e === character){
      return true;
    }
  }
  return false;
}

export { isInExcept }

let selectFromWakeableExcept = (except, state) => {
  console.log('except', except)
  let selectFrom = []
  for(let card of state.cards){
    console.log('card', card)
    if(isCardWakeable(card, state) && !isInExcept(card.role, except)){
      console.log('accepted', card)
      selectFrom.push(card)
    }
  }
  return selectFrom;
}

export { selectFromWakeableExcept }

let getCardByRole = (cards, role) => {
  for(let card of cards){
    if(card.role === role){
      return card;
    }
  }
}

export { getCardByRole }
