/* import internal modules */
import Layout from '../components/common/Layout'
import TitleComponent from '../components/common/Title'
import CartContainer from '../components/cart/CartContainer'

const ShoppingCartPage = () => {
  return (
    <Layout>
      <TitleComponent title={'Mi Pedido'} variantProp={'h2'} />
      <CartContainer />
    </Layout>
  )
}

export default ShoppingCartPage
