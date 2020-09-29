/* import external modules */
import { Grid } from '@material-ui/core'

/* import internal modules */
import SendOrderButton from '../../common/SendOrderButton'

const ShoppingCartSummary = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <h3>ShoppingCartSummary</h3>
      <SendOrderButton />
    </Grid>
  )
}

export default ShoppingCartSummary
