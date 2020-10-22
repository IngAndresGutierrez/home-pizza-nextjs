/* import internal modules */
import {
  HANDLE_REMOVE_CART_ITEM,
  HANDLE_ADD_CART_ITEM,
  HANDLE_PRICE,
} from '../../types'

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

      let flagAdd = state.itemsCartList.findIndex(
        (x) =>
          x.id === cartItem.id &&
          x.parameterization.selectedSize ===
            cartItem.parameterization.selectedSize &&
          x.parameterization.selectedPrice ===
            cartItem.parameterization.selectedPrice &&
          x.parameterization.selectedDrink ===
            cartItem.parameterization.selectedDrink
      )

      if (flagAdd < 0) {
        newItemsCartList = [...state.itemsCartList, action.payload.newCartItem]
      }

      if (flagAdd >= 0) {
        const newItemsList = [...state.itemsCartList]

        newItemsList.map((item) => {
          if (
            item.id === cartItem.id &&
            item.parameterization.selectedSize ===
              cartItem.parameterization.selectedSize &&
            item.parameterization.selectedPrice ===
              cartItem.parameterization.selectedPrice &&
            item.parameterization.selectedDrink ===
              cartItem.parameterization.selectedDrink
          ) {
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

    case HANDLE_REMOVE_CART_ITEM:
      const removeCartItem = action.payload.cartItem

      return {
        itemsCartList: [
          ...state.itemsCartList.filter(
            (item) => item.indexOnCart !== removeCartItem.indexOnCart
          ),
        ],
      }

    case HANDLE_PRICE:
      let totalPriceValue = 0

      state.itemsCartList.forEach((item) => {
        totalPriceValue +=
          parseInt(item.parameterization.selectedPrice) * item.badge
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
