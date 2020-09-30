/* import internal modules */
import { HANDLE_ADD_CART_ITEM, HANDLE_PRICE } from '../../types'

const initialState = {
  itemsCartList: [],
  totalPrice: 0,
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ADD_CART_ITEM:
      return {
        ...state,
        itemsCartList: [...state.itemsCartList, action.payload.newCartItem],
      }

    case HANDLE_PRICE:
      let totalPriceValue = 0

      state.itemsCartList.forEach((item) => {
        totalPriceValue += item.price
      })

      return {
        ...state,
        totalPrice: totalPriceValue,
      }

    default:
      return state
  }
}

export default Cart
