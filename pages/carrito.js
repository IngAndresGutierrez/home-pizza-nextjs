/* import internal modules */
import Layout from '../components/common/Layout'
import TitleComponent from '../components/common/Title'
import ShoppingCart from '../components/cart/ShoppingCart'

const ShoppingCartPage = () => {
  return (
    <Layout>
      <TitleComponent title={'Mi Pedido'} variantProp={'h2'} />
      <ShoppingCart />
    </Layout>
  )
}

export default ShoppingCartPage
