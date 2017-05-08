
isAlive = (character, state) => {
  for(let card of state.cards){
    if(card.role === character){
      return card.alive;
    }
  }
  return false;
}

isWakeable = (character, state) => {
  return isAlive(character, state) && !(state.inPrison === character);
}

areWakeable = (alive, state) => {
  for (let a of alive){
    if(!isWakeable(a, state)){
      return false;
    }
  }
  return true;
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

let whoreReqs = (alive, state) => {
  return areWakeable(alive, state) && (state.day === 0);
}

let sheriffReqs = (alive, state) => {
  return isAlive('sheriff', state);
}

nextNight = (state) => {
  let tableIndex = state.tableIndex;
  let order = [
    {step: 'WHORE', alive: ['whore'], reqs: whoreReqs, stepOrder: orderWhore},
    {step: 'SHERIFF', alive: [], reqs: sheriffReqs, stepOrder: orderSheriff},
    {step: 'PASTOR', alive: ['pastor'], reqs: areWakeable, stepOrder: orderPastor},
    {step: 'BANDITS', alive: [], reqs: banditsReqs, stepOrder: orderBandits},
    {step: 'AVENGER', alive: ['avenger'], reqs: areWakeable, stepOrder: orderAvenger},
    {step: 'THIEF', alive: ['thief'], reqs: areWakeable, stepOrder: orderThief},
    {step: 'INDIANS', alive: [], reqs: indiansReqs, stepOrder: orderIndians},
    {step: 'START_OF_DAY', alive: [], reqs: areWakeable}
  ]
  while(true){
    tableIndex = tableIndex + 1;
    console.log('index', tableIndex);
    if(order[tableIndex].reqs(order[tableIndex].alive, state)){
      let s = {
        ...state,
        stepIndex: -1
      }
      let stepOrder = order[tableIndex].stepOrder(s)
      next = nextSubstep(s, stepOrder);
      return {
        ...next,
        step: order[tableIndex].step,
        tableIndex: tableIndex
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

let startOfGame = (state, action) => {
  let next = nextNight(state);
  switch (action.type) {
    case 'START':
      return {
        ...next,
        choosen: state.cards[0]
      }
    case 'MENU':
      return getMenu(state)
    default:
      return state
  }
}

let startOfNight = (state, action) => {
  let next = nextNight(state);
  switch (action.type) {
    case 'NEXT':
      return next
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

let isInExcept = (character, except) => {
  for(let e of except){
    if(e === character){
      return true;
    }
  }
  return false;
}


let selectFromWakeableExcept = (except, state) => {
  console.log('except', except)
  let selectFrom = []
  for(let card of state.cards){
    console.log('card', card)
    if(isWakeable(card.role, state) && !isInExcept(card.role, except)){
      console.log('accepted', card)
      selectFrom.push(card)
    }
  }
  return selectFrom;
}

let getCardByRole = (cards, role) => {
  for(let card of cards){
    if(card.role === role){
      return card;
    }
  }
}


let orderWhore = (state) => {
  let selectFrom = selectFromWakeableExcept(['whore'], state);
  let whore = getCardByRole(state.cards, 'whore');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: whore},
    {substep: 'SELECTION', from: selectFrom, text: 'Dziwka wybiera z kim chce spędzić noc', choosen: selectFrom[0]},
    {substep: 'WAKE_UP_BY_NAME', text: '', who: choosen},
    {substep: 'DISPLAY_CARD', who: choosen, text: 'Pokaż kartę dziwce'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}


let orderSheriff = (state) => {
  let selectFrom = selectFromWakeableExcept([], state);
  let sheriff = getCardByRole(state.cards, 'sheriff');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: sheriff},
    {substep: 'SELECTION', from: selectFrom, text: 'Szeryf wybiera kogo chce zaaresztować', choosen: selectFrom[0]},
    {substep: 'INSTRUCTION', text: 'Ogłoś: "Tej nocy szeryf aresztuje ' + choosen.name + '"'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}


let orderPastor = (state) => {
  let selectFrom = selectFromWakeableExcept(['pastor'], state);
  let pastor = getCardByRole(state.cards, 'pastor');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: pastor},
    {substep: 'SELECTION', from: selectFrom, text: 'Pastor wybiera kogo chce wyspowiadać', choosen: selectFrom[0]},
    {substep: 'DISPLAY_FACTION', who: choosen, text: 'Pokaż frakcję pastorowi'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}

let orderBandits = (state) => {
  let selectFrom = selectFromWakeableExcept(['pastor'], state);
  let pastor = getCardByRole(state.cards, 'pastor');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: pastor},
    {substep: 'SELECTION', from: selectFrom, text: 'Pastor wybiera kogo chce wyspowiadać', choosen: selectFrom[0]},
    {substep: 'DISPLAY_FACTION', who: choosen, text: 'Pokaż frakcję pastorowi'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}

let orderAvenger = (state) => {
  let selectFrom = selectFromWakeableExcept(['pastor'], state);
  let pastor = getCardByRole(state.cards, 'pastor');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: pastor},
    {substep: 'SELECTION', from: selectFrom, text: 'Pastor wybiera kogo chce wyspowiadać', choosen: selectFrom[0]},
    {substep: 'DISPLAY_FACTION', who: choosen, text: 'Pokaż frakcję pastorowi'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}

let orderThief = (state) => {
  let selectFrom = selectFromWakeableExcept(['pastor'], state);
  let pastor = getCardByRole(state.cards, 'pastor');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: pastor},
    {substep: 'SELECTION', from: selectFrom, text: 'Pastor wybiera kogo chce wyspowiadać', choosen: selectFrom[0]},
    {substep: 'DISPLAY_FACTION', who: choosen, text: 'Pokaż frakcję pastorowi'},
    {substep: 'INSTRUCTION', text: 'Wszyscy idą spać'},
  ]
  return order
}

let orderIndians = (state) => {
  let selectFrom = selectFromWakeableExcept(['pastor'], state);
  let pastor = getCardByRole(state.cards, 'pastor');
  let choosen = state.choosen;
  console.log('select', selectFrom)
  let order = [
    {substep: 'WAKE_UP_BY_ROLE', text: '', who: pastor},
    {substep: 'SELECTION', from: selectFrom, text: 'Pastor wybiera kogo chce wyspowiadać', choosen: selectFrom[0]},
    {substep: 'DISPLAY_FACTION', who: choosen, text: 'Pokaż frakcję pastorowi'},
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
    case 'SELECT':
      return {
        ...state,
        choosen: action.choosen
      }
    default:
      return state;
  }
}


let sheriff = (state, action) => {
  let order = orderSheriff(state)
  next = nextSubstep(state, order);
  switch (action.type) {
    case 'MENU':
      return getMenu(state);
    case 'NEXT':
      return next
    case 'SELECT':
      return {
        ...state,
        choosen: action.choosen,
        inPrison: action.choosen
      }
    default:
      return state;
  }
}

let pastor = (state, action) => {
  let order = orderPastor(state)
  next = nextSubstep(state, order);
  switch (action.type) {
    case 'MENU':
      return getMenu(state);
    case 'NEXT':
      return next
    case 'SELECT':
      return {
        ...state,
        choosen: action.choosen
      }
    default:
      return state;
  }
}

export const night = (state, action) => {
  switch (state.step) {
    case 'START_OF_GAME':
      return startOfGame(state, action)
    case 'START_OF_NIGHT':
      return startOfNight(state, action)
    case 'MENU':
      return menu(state, action)
    case 'START_OF_DAY':
      return startOfDay(state, action)
    case 'WHORE':
      return whore(state, action)
    case 'SHERIFF':
      return sheriff(state, action)
    case 'PASTOR':
      return pastor(state, action)
    default:
      return state
  }
}
