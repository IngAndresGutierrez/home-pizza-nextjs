/* import internal modules */
import { useSelector } from 'react-redux'

/* import internal modules */
import ProductsCardList from '../../products/ProductsCardList'

const CartComponent = () => {
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)

  return (
    <ProductsCardList
      productsListAggregates={itemsCartList}
      isWithoutAddButton={true}
    />
  )
}

export default CartComponent
