/* import external modules */
import { Container, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import ProductCard from '../ProductCard'
import productsListFake from '../../../constants/products'

const ProductsCardList = () => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {productsListFake.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductsCardList
