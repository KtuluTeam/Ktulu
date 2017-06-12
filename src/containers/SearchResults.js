import { connect } from 'react-redux'
import { SearchResultsView } from '../components/SearchResultsView'

let mapStateToProps = ({statueHolder, instruction, participant1, participant2, searchResult1, searchResult2}) => {
  return {
    statueHolder: statueHolder,
    instruction: instruction,
    participant1: participant1,
    participant2: participant2,
    searchResult1: searchResult1,
    searchResult2: searchResult2
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const SearchResults = connect(mapStateToProps,
  mapDispatchToProps)(SearchResultsView)
