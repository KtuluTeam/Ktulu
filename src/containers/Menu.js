import { connect } from 'react-redux'
import { MenuView } from '../components/MenuView'

mapStateToProps = () => {
  return {
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'RETURN' }) }
  }
}

export const Menu = connect(mapStateToProps,
  mapDispatchToProps)(MenuView)
