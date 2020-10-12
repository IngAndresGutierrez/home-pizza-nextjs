/* import external modules */
import { useDispatch, useSelector } from 'react-redux'
import { Visibility, AddShoppingCart } from '@material-ui/icons'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import {
  setAddCartItem,
  setCaculatePriceCart,
} from '../../../redux/actions/cart'
import DialogComponent from '../../common/Dialog'
import ProductDetailedCard from '../ProductDetailedCard'
import {
  numberToCurrencyFormat,
  getNumberAddedProducts,
} from '../../../utils/helpers'

const ProductCardComponent = ({ product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)

  const addToItemsCartList = () => {
    if (getNumberAddedProducts(itemsCartList) < 15) {
      dispatch(setAddCartItem(product))
      dispatch(setCaculatePriceCart())
    }

    if (getNumberAddedProducts(itemsCartList) >= 15) {
      alert('Límite de pizzas alcanzado.')
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={product.title}
        subheader={numberToCurrencyFormat(product.price)}
      />
      <CardMedia
        className={classes.cardMedia}
        image={product.coverImage}
        title={product.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h4">
          Ingredientes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.ingredients.join(',')}
          {'.'}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <DialogComponent
          titleDialog={product.title}
          isIconOpenButton={true}
          iconOpenButton={<Visibility />}
          colorOpenButton={'secondary'}
          ariaLabelOpenButton={'Agregar al carrito de compras'}
          contentDialog={
            <ProductDetailedCard product={product} isBoxShadowEnable={false} />
          }
        /> */}
        <IconButton
          aria-label="Agregar al carrito de compras"
          color="primary"
          onClick={addToItemsCartList}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent
