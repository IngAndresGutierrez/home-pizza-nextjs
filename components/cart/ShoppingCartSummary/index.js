/* import external modules */
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

/* import internal modules */
import useStyles from './styles'
import SendOrderButton from '../../common/SendOrderButton'
import { numberToCurrencyFormat } from '../../../utils/helpers'

const ShoppingCartSummary = () => {
  const classes = useStyles()
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)
  const totalPriceCart = useSelector((state) => state.cart.totalPrice)

  const renderSummaryItemsCart = itemsCartList.map((item, index) => (
    <Grid item key={index} xs={12} sm={12} md={12}>
      <p key={index}>
        {item.title + ' - ' + numberToCurrencyFormat(item.price)}
      </p>
    </Grid>
  ))
  const renderTotalPriceFormat = (
    <Grid item xs={12} sm={12} md={12}>
      <h3>{' Precio Total: ' + numberToCurrencyFormat(totalPriceCart)}</h3>
    </Grid>
  )

  const renderSendOrderButton = (
    <Grid item xs={12} sm={12} md={12}>
      <SendOrderButton
        itemsCartList={itemsCartList}
        totalPriceCart={totalPriceCart}
      />
    </Grid>
  )

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <h2>Resumen del pedido</h2>
        {renderSummaryItemsCart}
        {renderTotalPriceFormat}
        {renderSendOrderButton}
      </Grid>
    </div>
  )
}

export default ShoppingCartSummary
