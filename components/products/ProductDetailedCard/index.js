/* import external modules */
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from '@material-ui/core'
import DemoCarousel from '../../common/Carousel'

/* import internal modules */
import useStyles from './styles'

const ProductDetailedCard = ({ product, isBoxShadowEnable }) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardHeader title={product.title} subheader="September 14, 2016" />
      <CardContent>
        {/* <DemoCarousel /> */}
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ProductDetailedCard
