/* import internal modules */
import { HANDLE_USER } from '../../types'

const initialState = {
  user: { user: true },
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_USER:
      return state

    default:
      return state
  }
}

export default User
