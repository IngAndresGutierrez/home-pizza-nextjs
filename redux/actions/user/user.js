/* import internal modules */
import { HANDLE_USER } from '../../types'

export const setUser = (user) => ({
  type: HANDLE_USER,
  payload: { user },
})
