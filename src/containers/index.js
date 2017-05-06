import React from 'react'
import { NumberPlayers } from './NumberPlayers'
import { FactionSizes } from './FactionSizes'
export const viewMap = {
  'SETUP': {
    'NUMBER_PLAYERS': () => { return (<NumberPlayers />) },
    'FACTION_SIZES': () => { return (<FactionSizes />) },
  }
}
