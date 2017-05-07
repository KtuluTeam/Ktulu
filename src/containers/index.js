import React from 'react'
import { NumberPlayers } from './NumberPlayers'
import { FactionSizes } from './FactionSizes'
import { CardSelection } from './CardSelection'
import { HiddenCard } from './HiddenCard'
import { ShowCard } from './ShowCard'
import { StartOfNight } from './StartOfNight'
import { Menu } from './Menu'
import { Instruction } from './Instruction'
import { Choice } from './Choice'
import { DisplayCard } from './DisplayCard'
import { WakeUpByRole } from './WakeUpByRole'
import { WakeUpByName } from './WakeUpByName'

export const tools = {
  'INSTRUCTION': () => { return (<Instruction />)},
  'CHOICE': () => { return (<Choice />)},
  'DISPLAY_CARD': () => { return (<DisplayCard />)},
  'WAKE_UP_BY_ROLE': () => { return (<WakeUpByRole />)},
  'WAKE_UP_BY_NAME': () => { return (<WakeUpByName />)}
}


export const viewMap = {
  'SETUP': {
    'NUMBER_PLAYERS': () => { return (<NumberPlayers />) },
    'FACTION_SIZES': () => { return (<FactionSizes />) },
    'FACTION_CARDS': () => { return (<CardSelection />) },
    'HIDDEN_CARD' : () => { return (<HiddenCard />) },
    'SHOW_CARD' :  () => { return (<ShowCard />) }
  },
  'NIGHT': {
    'START_OF_NIGHT' : () => { return (<StartOfNight />) },
    'MENU' : () => { return (<Menu />) },
    'WHORE' : {
      ...tools,
      hasSubsteps: true
    }
  }
}
