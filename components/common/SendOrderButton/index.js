/* import external modules */
import { Send } from '@material-ui/icons'
import { Button, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import { numberToCurrencyFormat } from '../../../utils/helpers'
import { registerOrderIntoFirebase } from '../../../apis/products'

const SendOrderButton = ({ itemsCartList, totalPriceCart }) => {
  const classes = useStyles()

  const buildTextOrderToSend = () => {
    const aditionaltextOrder =
      'Hola, me gustaria comer las verdaderas pizzas%3A%0A%0A'
    const separatorText = '%20-%20'
    const jumpLine = '%0A'
    let aditionaltextOrderFormat = aditionaltextOrder.replace(' ', '%20')

    itemsCartList.forEach((item) => {
      const currencyPrice = numberToCurrencyFormat(
        item.parameterization.selectedPrice
      )
      aditionaltextOrderFormat += `${item.title}${separatorText}${item.parameterization.selectedSize}${separatorText}${item.parameterization.selectedDrink}- Cant. (${item.badge})${separatorText}${currencyPrice}${jumpLine}${jumpLine}`
    })

    aditionaltextOrderFormat += `${jumpLine}Precio%20Total%3A%20%20${numberToCurrencyFormat(
      totalPriceCart
    )}${jumpLine}`

    return aditionaltextOrderFormat
  }

  const sendOrderFunction = () => {
    const pizzeriaPhone = '573106622828'
    const textToSend = buildTextOrderToSend()
    const baseUrlWhatsappApi = `https://wa.me/${pizzeriaPhone}?text=${textToSend}`
    registerOrderIntoFirebase({ itemsCartList, totalPriceCart })
    window.open(
      baseUrlWhatsappApi,
      'Home Pizza',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=300,height=500,width=700,modal=yes,alwaysRaised=yes'
    )
  }

  return (
    <Button
      size="large"
      color="primary"
      endIcon={<Send />}
      variant="contained"
      aria-label="Realizar Pedido"
      className={classes.button}
      onClick={sendOrderFunction}
    >
      Realizar Pedido
    </Button>
  )
}

export default SendOrderButton
