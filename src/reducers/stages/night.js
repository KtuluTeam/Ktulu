
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

let whoreReqs = (alive, state) => {
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

nextNight = (state) => {
  let tableIndex = state.tableIndex;
  let order = [
    {step: 'WHORE', alive: ['whore'], reqs: whoreReqs},
    {step: 'SHERIFF', alive: ['sheriff'], reqs: areWakeable},
    {step: 'PASTOR', alive: ['pastor'], reqs: areWakeable},
    {step: 'BANDITS', alive: [], reqs: banditsReqs},
    {step: 'AVENGER', alive: ['avenger'], reqs: areWakeable},
    {step: 'THIEF', alive: ['thief'], reqs: areWakeable},
    {step: 'INDIANS', alive: [], reqs: indiansReqs},
    {step: 'START_OF_DAY', alive: [], reqs: areWakeable}
  ]
  while(true){
    tableIndex = tableIndex + 1;
    console.log('index', tableIndex);
    if(order[tableIndex].reqs(order[tableIndex].alive, state)){
      return {
        step: order[tableIndex].step,
        tableIndex: tableIndex,
        stepIndex: -1,
        substep: 'INITIAL'
      };
    }
  }
}

let getMenu = (state) => {
  return {
    ...state,
    step: 'MENU',
    last_step: state.step,
    last_substep: state.substep
  }
}

let startOfNight = (state, action) => {
  let next = nextNight(state);
  switch (action.type) {
    case 'START':
      return {
        ...state,
        ...next
      }
    case 'MENU':
      return getMenu(state)
    default:
      return state
  }
}

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


let orderWhore = (state) => {
  let order = [
    {substep: 'INSTRUCTION', text: 'Obudź dziwkę'},
    {substep: 'CHOICE', from: state.cards},
    {substep: 'INSTRUCTION', text: 'Obudź:' + state.whoreChecks},
    {substep: 'DISPLAY_CARD', who: state.whoreChecks},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}

let nextSubstep = (state, order) => {
  let stepIndex = state.stepIndex + 1;
  if (stepIndex === order.length){
    return {
      ...state,
      ...nextNight(state)
    }
  }
  return {
    ...state,
    ...order[stepIndex],
    stepIndex: stepIndex
  };
}

let whore = (state, action) => {
  let order = orderWhore(state)
  next = nextSubstep(state, order);
  switch (action.type) {
    case 'MENU':
      return getMenu(state);
    case 'NEXT':
      return next
    default:
      return state;
  }
}


export const night = (state, action) => {
  switch (state.step) {
    case 'START_OF_NIGHT':
      return startOfNight(state, action)
    case 'MENU':
      return menu(state, action)
    case 'START_OF_DAY':
      return startOfDay(state, action)
    case 'WHORE':
      return whore(state, action)
    default:
      return state
  }
}
