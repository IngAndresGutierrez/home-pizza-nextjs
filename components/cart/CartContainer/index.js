/* import external modules */
import { Grid, Paper } from '@material-ui/core'

/* import internal modules */
import ShoppingCart from '../ShoppingCart'
import ShoppingCartSummary from '../ShoppingCartSummary'
import ControlledAccordion from '../../common/Accordion'

const CartContainer = () => {
  return (
    <div>
      <ShoppingCart />
      {/* <ControlledAccordion /> */}
      <ShoppingCartSummary />
    </div>
  )
}

export default CartContainer
