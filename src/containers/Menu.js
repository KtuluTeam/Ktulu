import { connect } from 'react-redux'
import { MenuView } from '../components/MenuView'

let mapStateToProps = () => {
  return {
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'RETURN' }) }
  }
}

export const Menu = connect(mapStateToProps,
  mapDispatchToProps)(MenuView)
