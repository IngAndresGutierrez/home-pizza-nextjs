/* import internal modules */
import { HANDLE_ADD_CART_ITEM, HANDLE_PRICE } from '../../types'

export const setAddCartItem = (newCartItem) => ({
  type: HANDLE_ADD_CART_ITEM,
  payload: { newCartItem },
})

export const setCaculatePriceCart = () => ({
  type: HANDLE_PRICE,
  payload: {},
})
