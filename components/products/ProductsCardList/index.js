/* import external modules */
import { Container, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import ProductCard from '../ProductCard'
import productsListFake from '../../../constants/products'

const ProductsCardList = ({ productsListAggregates, isWithoutAddButton }) => {
  const classes = useStyles()
  const productsList = productsListAggregates
    ? productsListAggregates
    : productsListFake

  const renderProductsList = productsList?.map((item, index) => (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <ProductCard product={item} isWithoutAddButton={isWithoutAddButton} />
    </Grid>
  ))

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {renderProductsList}
      </Grid>
    </Container>
  )
}

export default ProductsCardList
