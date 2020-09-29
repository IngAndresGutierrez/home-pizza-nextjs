/* import external modules */
import { useSelector } from 'react-redux'

/* import internal modules */
import ProductsDetailedCardList from '../../products/ProductsDetailedCardList'

const CartComponent = () => {
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)

  return <ProductsDetailedCardList productsListAggregates={itemsCartList} />
}

export default CartComponent
