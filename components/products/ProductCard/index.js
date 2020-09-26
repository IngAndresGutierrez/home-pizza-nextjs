/* import external modules */
import { useDispatch } from 'react-redux'
import { Visibility, AddShoppingCart } from '@material-ui/icons'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import { setAddCartItem } from '../../../redux/actions/cart'

const ProductCardComponent = ({ product, isWithoutAddButton }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const addToItemsCartList = () => {
    dispatch(setAddCartItem(product))
  }

  const showInfo = () => {
    alert('¡Modal!')
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="Agregar al carrito de compras"
          color="primary"
          onClick={showInfo}
        >
          <Visibility />
        </IconButton>
        {!isWithoutAddButton && (
          <IconButton
            aria-label="Agregar al carrito de compras"
            color="primary"
            onClick={addToItemsCartList}
          >
            <AddShoppingCart />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent
