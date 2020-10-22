/* import external modules */
import { useDispatch, useSelector } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import { Badge, Grid, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

/* import internal modules */
import useStyles from './styles'
import SendOrderButton from '../../common/SendOrderButton'
import { numberToCurrencyFormat } from '../../../utils/helpers'
import {
  setCaculatePriceCart,
  setRemoveCartItem,
} from '../../../redux/actions/cart'

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
  const dispatch = useDispatch()
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)
  const totalPriceCart = useSelector((state) => state.cart.totalPrice)

  const removeItemCart = (cartItem) => {
    dispatch(setRemoveCartItem(cartItem))
    dispatch(setCaculatePriceCart())
  }

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
          <CloseIcon
            color="primary"
            fontSize="small"
            onClick={() => removeItemCart(item)}
          />
          {`${item.title} - ${item.parameterization.selectedSize} - ${
            item.parameterization.selectedDrink
          } - ${numberToCurrencyFormat(item.parameterization.selectedPrice)}`}
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
        <Typography
          className={classes.secondaryHeading}
          component="h6"
          variant="subtitle1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {itemsCartList.length === 0 && 'No has agregado ningún producto.'}
        </Typography>
        {renderSummaryItemsCart}
        {/* {renderTotalPriceFormat} */}
        {itemsCartList.length > 0 && renderSendOrderButton}
      </Grid>
    </div>
  )
}

export default ShoppingCartSummary
