/* import external modules */
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

const CardComponent = () => {
  const classes = useStyles()

  const addToItemsCartList = () => {
    const baseUrlWhatsappApi =
      'https://wa.me/573128454878?text=Estoy%20interesado%20en%20%20la%20mejor%20%20pizza'

    window.open(
      baseUrlWhatsappApi,
      'Home Pizza',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=300,height=500,width=700,modal=yes,alwaysRaised=yes'
    )
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

export default CardComponent
