/* import internal modules */
import {
  HANDLE_ADD_CART_ITEM,
  HANDLE_PRICE,
  HANDLE_REMOVE_CART_ITEM,
  HANDLE_CLEAR_CART_ITEM,
} from '../../types'

export const setAddCartItem = (newCartItem) => ({
  type: HANDLE_ADD_CART_ITEM,
  payload: { newCartItem },
})

export const setRemoveCartItem = (cartItem) => ({
  type: HANDLE_REMOVE_CART_ITEM,
  payload: { cartItem },
})

export const setCaculatePriceCart = () => ({
  type: HANDLE_PRICE,
  payload: {},
})

export const setClearCart = () => ({
  type: HANDLE_CLEAR_CART_ITEM,
  payload: {},
})
