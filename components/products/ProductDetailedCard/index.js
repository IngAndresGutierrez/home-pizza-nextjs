/* import external modules */
import { useDispatch, useSelector } from 'react-redux'
import { Visibility, AddShoppingCart } from '@material-ui/icons'
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import { numberToCurrencyFormat } from '../../../utils/helpers'

const ProductDetailedCardComponent = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Badge badgeContent={product.badge} color="secondary">
            {product.title}
          </Badge>
        }
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
    </Card>
  )
}

export default ProductDetailedCardComponent
