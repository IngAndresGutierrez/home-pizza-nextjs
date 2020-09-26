/* import internal modules */
import ProductDetailedCard from '../ProductDetailedCard'

const ProductsDetailedCardList = ({ productsListAggregates }) => {
  const renderProductsDetailedCardList = productsListAggregates?.map(
    (item, index) => <ProductDetailedCard key={index} product={item} />
  )

  return <>{renderProductsDetailedCardList}</>
}

export default ProductsDetailedCardList
