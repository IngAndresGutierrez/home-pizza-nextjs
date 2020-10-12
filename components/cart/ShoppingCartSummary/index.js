/* import external modules */
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import { Badge, Grid, Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import SendOrderButton from '../../common/SendOrderButton'
import { numberToCurrencyFormat } from '../../../utils/helpers'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -10,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const ShoppingCartSummary = () => {
  const classes = useStyles()
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)
  const totalPriceCart = useSelector((state) => state.cart.totalPrice)

  const renderSummaryItemsCart = itemsCartList.map((item, index) => (
    <Grid item key={index} xs={12} sm={12} md={12}>
      <StyledBadge badgeContent={item.badge} color="secondary">
        <Typography
          className={classes.secondaryHeading}
          key={index}
          component="h6"
          variant="subtitle1"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          {item.title + ' - ' + numberToCurrencyFormat(item.price)}
        </Typography>
      </StyledBadge>
    </Grid>
  ))

  const renderTotalPriceFormat = (
    <Grid item xs={12} sm={12} md={12}>
      <Typography>
        {' Precio Total: ' + numberToCurrencyFormat(totalPriceCart)}
      </Typography>
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
        <Typography
          component="h2"
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Resumen del pedido
        </Typography>
        {renderSummaryItemsCart}
        {/* {renderTotalPriceFormat} */}
        {itemsCartList.length > 0 && renderSendOrderButton}
      </Grid>
    </div>
  )
}

export default ShoppingCartSummary
