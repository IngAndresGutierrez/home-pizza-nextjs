/* import internal modules */
import { HANDLE_ADD_CART_ITEM, HANDLE_PRICE } from '../../types'

const initialState = {
  itemsCartList: [],
  totalPrice: 0,
  totalItemsAdded: 0,
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ADD_CART_ITEM:
      const cartItem = action.payload.newCartItem
      let newItemsCartList = []

      if (!state.itemsCartList.includes(action.payload.newCartItem)) {
        newItemsCartList = [...state.itemsCartList, action.payload.newCartItem]
      }

      if (state.itemsCartList.includes(cartItem)) {
        const newItemsList = state.itemsCartList.slice()

        newItemsList.map((item) => {
          if (item.id === cartItem.id) {
            item.badge = item.badge + 1
            return item
          }
        })
        newItemsCartList = newItemsList
      }

      return {
        ...state,
        itemsCartList: newItemsCartList,
        totalItemsAdded: state.totalItemsAdded + 1,
      }

    case HANDLE_PRICE:
      let totalPriceValue = 0

      state.itemsCartList.forEach((item) => {
        totalPriceValue += item.price * item.badge
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
