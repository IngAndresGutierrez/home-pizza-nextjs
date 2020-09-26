/* import internal modules */
import { HANDLE_ADD_CART_ITEM } from '../../types'

const initialState = {
  itemsCartList: [],
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ADD_CART_ITEM:
      return state

    default:
      return state
  }
}

export default Cart
