/* import external modules */
import { Container, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import ProductCard from '../ProductCard'
import productsListFake from '../../../constants/products'

const ProductsCardList = () => {
  const classes = useStyles()

  const renderProductsList = productsListFake?.map((item) => (
    <Grid item key={item.id} xs={12} sm={6} md={6}>
      <ProductCard product={item} />
    </Grid>
  ))

  return (
    <div className={classes.heroContent}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {renderProductsList}
        </Grid>
      </Container>
    </div>
  )
}

export default ProductsCardList
