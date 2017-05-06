
isAlive = (character, state) => {
  for(let card of state.cards){
    if(card.role === character){
      return card.alive;
    }
  }
  return false;
}

isWekeable = (character, state) => {
  return isAlive(character, state) && !(state.inPrison === character);
}

areWakeable = (alive, state) => {
  for (let a of alive){
    if(!isWekeable(a, state)){
      return false;
    }
  }
  return true;
}

whoreReqs = (alive, state) => {
  return areWakeable(alive, state) && (state.day === 0);
}

factionMembersAlive = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive){
      counter++;
    }
  }
  return counter;
}

factionMembersWakeable = (faction, state) => {
  let counter = 0;
  for(let card of state.cards){
    if(card.faction === faction && card.alive && state.inPrison !== card.role){
      counter++;
    }
  }
  return counter;
}

banditsAlive = (state) => {
  return factionMembersAlive('bandits', state);
}

indiansAlive = (state) => {
  return factionMembersAlive('indians', state);
}

citizensAlive = (state) => {
  return factionMembersAlive('citizens', state);
}

banditsWakeable = (state) => {
  return factionMembersWakeable('bandits', state);
}

indiansWakeable = (state) => {
  return factionMembersWakeable('indians', state);
}

citizensWakeable = (state) => {
  return factionMembersWakeable('citizens', state);
}

banditsReqs = (alive, state) => {
  return banditsWakeable(state) > 0;
}

indiansReqs = (alive, state) => {
  return indiansWakeable(state) > 0;
}

nextNight = (table_index, state) => {
  let order = [
    {node: 'WHORE', alive: ['whore'], reqs: whoreReqs},
    {node: 'SHERIFF', alive: ['sheriff'], reqs: areWakeable},
    {node: 'PASTOR', alive: ['pastor'], reqs: areWakeable},
    {node: 'BANDITS', alive: [], reqs: banditsReqs},
    {node: 'AVENGER', alive: ['avenger'], reqs: areWakeable},
    {node: 'THIEF', alive: ['thief'], reqs: areWakeable},
    {node: 'INDIANS', alive: [], reqs: indiansReqs},
    {node: 'START_OF_DAY', alive: [], reqs: areWakeable}
  ]
  while(TRUE){
    table_index = table_index + 1;
    if(order[table_index].reqs(order[table_index].alive, state)){
      return order[table_index].node;
    }
  }
}


startOfNight = (state, action) => {
  switch (action.type) {
    case 'START':
      return{
        ...state
      }
    case 'MENU':
      return {
        ...state,
        step: 'MENU',
        last: state.step,
      }
    default:
      return state
  }
}

menu = (state, action) => {
  switch (action.type) {
    case 'RETURN':
      return {
        ...state,
        step: state.last
      }
    default:
      return state
  }
}



export const setup = (state, action) => {
  switch (state.step) {
    case 'START_OF_NIGHT':
      return startOfNight(state, action)
    case 'MENU':
      return menu(state, action)
    case 'NIGHT_CHARACTER':
      return nightCharacter(state, action)
    case 'START_OF_DAY':
      return startOfDay(state, action)
    default:
      return state
  }
}
