/* import internal modules */
import { HANDLE_ADD_CART_ITEM } from '../../types'

export const setAddCartItem = (newCartItem) => ({
  type: HANDLE_ADD_CART_ITEM,
  payload: { newCartItem },
})
