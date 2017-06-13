import React from 'react'
import { NumberPlayers } from './NumberPlayers'
import { FactionSizes } from './FactionSizes'
import { CardSelection } from './CardSelection'
import { HiddenCard } from './HiddenCard'
import { ShowCard } from './ShowCard'
import { StartOfNight } from './StartOfNight'
import { StartOfGame } from './StartOfGame'
import { Menu } from './Menu'
import { Instruction } from './Instruction'
import { Selection } from './Selection'
import { Choice } from './Choice'
import { DisplayCard } from './DisplayCard'
import { DisplayFaction } from './DisplayFaction'
import { WakeUpByRole } from './WakeUpByRole'
import { WakeUpByName } from './WakeUpByName'
import { StartDay } from './StartDay'
import { ChoiceFromTwo } from './ChoiceFromTwo'
import { SearchResults } from './SearchResults'
import { GameOver } from './GameOver'

export const tools = {
  'INSTRUCTION': () => { return (<Instruction />) },
  'SELECTION': () => { return (<Selection />) },
  'CHOICE': () => { return (<Choice />) },
  'DISPLAY_CARD': () => { return (<DisplayCard />) },
  'DISPLAY_FACTION': () => { return (<DisplayFaction />) },
  'WAKE_UP_BY_ROLE': () => { return (<WakeUpByRole />) },
  'WAKE_UP_BY_NAME': () => { return (<WakeUpByName />) },
  'CHOICE_FROM_TWO': () => { return (<ChoiceFromTwo />) },
  'SEARCH_RESULTS': () => { return (<SearchResults />) }
}

export const viewMap = {
  'SETUP': {
    'MENU': () => { return (<Menu />) },
    'NUMBER_PLAYERS': () => { return (<NumberPlayers />) },
    'FACTION_SIZES': () => { return (<FactionSizes />) },
    'FACTION_CARDS': () => { return (<CardSelection />) },
    'HIDDEN_CARD': () => { return (<HiddenCard />) },
    'SHOW_CARD': () => { return (<ShowCard />) }
  },
  'NIGHT': {
    'START_OF_NIGHT': () => { return (<StartOfNight />) },
    'START_OF_GAME': () => { return (<StartOfGame />) },
    'MENU': () => { return (<Menu />) },
    'WHORE': {
      ...tools,
      hasSubsteps: true
    },
    'SHERIFF': {
      ...tools,
      hasSubsteps: true
    },
    'PASTOR': {
      ...tools,
      hasSubsteps: true
    },
    'BANDITS_WAKE_AND_SEARCH': {
      ...tools,
      hasSubsteps: true
    },
    'BANDITS_CHOOSE_AND_SLEEP': {
      ...tools,
      hasSubsteps: true
    },
    'AVENGER': {
      ...tools,
      hasSubsteps: true
    },
    'THIEF': {
      ...tools,
      hasSubsteps: true
    },
    'INDIANS_WAKEUP': {
      ...tools,
      hasSubsteps: true
    },
    'SHAMAN': {
      ...tools,
      hasSubsteps: true
    },
    'INDIANS_KILL': {
      ...tools,
      hasSubsteps: true
    },
    'INDIANS_WITH_STATUE': {
      ...tools,
      hasSubsteps: true
    },
    'COYOTE': {
      ...tools,
      hasSubsteps: true
    },
    'WARRIOR': {
      ...tools,
      hasSubsteps: true
    },
    'INDIANS_SLEEP': {
      ...tools,
      hasSubsteps: true
    }
  },
  'DAY': {
     'START_OF_DAY': () => { return (<StartDay />) },
     'MENU': () => { return (<Menu />) },
     'DUEL': {
       ...tools,
       hasSubsteps: true
     },
     'SEARCH': {
       ...tools,
       hasSubsteps: true
     },
     'HANGING': {
       ...tools,
       hasSubsteps: true
     }
  },
  'GAME_OVER': {
    'GAME_OVER': () => { return (<GameOver />) },
    'MENU': () => { return (<Menu />) }
  }
}
