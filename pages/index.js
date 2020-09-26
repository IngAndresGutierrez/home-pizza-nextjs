/* import external modules */
import { Fragment } from 'react'

/* import internal modules */
import Cover from '../components/Landing/Cover'
import Layout from '../components/common/Layout'
import ProductsCardList from '../components/products/ProductsCardList'

const Landing = () => {
  return (
    <Fragment>
      <Layout>
        <main>
          <Cover />
          <ProductsCardList />
        </main>
      </Layout>
    </Fragment>
  )
}

export default Landing
