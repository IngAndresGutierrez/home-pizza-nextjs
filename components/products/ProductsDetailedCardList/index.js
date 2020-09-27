/* import external modules */
import { Container, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import ProductDetailedCard from '../ProductDetailedCard'

const ProductsDetailedCardList = ({ productsListAggregates }) => {
  const classes = useStyles()

  const renderProductsDetailedCardList = productsListAggregates?.map(
    (item, index) => (
      <Grid item key={index} xs={12} sm={12} md={12}>
        <ProductDetailedCard product={item} />
      </Grid>
    )
  )

  return (
    <div className={classes.heroContent}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {renderProductsDetailedCardList}
        </Grid>
      </Container>
    </div>
  )
}

export default ProductsDetailedCardList
