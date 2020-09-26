/* import internal modules */
import { HANDLE_ADD_CART_ITEM } from '../../types'

export const setAddCartItem = (newItemList) => ({
  type: HANDLE_ADD_CART_ITEM,
  payload: { newItemList },
})
