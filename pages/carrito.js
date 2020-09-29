/* import internal modules */
import Layout from '../components/common/Layout'
import TitleComponent from '../components/common/Title'
import ShoppingCart from '../components/cart/ShoppingCart'
import ShoppingCartSummary from '../components/cart/ShoppingCartSummary'

const ShoppingCartPage = () => {
  return (
    <Layout>
      <TitleComponent title={'Mi Pedido'} variantProp={'h2'} />
      <ShoppingCart />
      <ShoppingCartSummary />
    </Layout>
  )
}

export default ShoppingCartPage
