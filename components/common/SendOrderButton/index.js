/* import external modules */
import { Send } from '@material-ui/icons'
import { Button, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import { numberToCurrencyFormat } from '../../../utils/helpers'

const SendOrderButton = ({ itemsCartList, totalPriceCart }) => {
  const classes = useStyles()

  const buildTextOrderToSend = () => {
    const aditionaltextOrder =
      'Hola, me gustaria comer las verdaderas pizzas%3A%0A%0A'
    const separatorText = '%20-%20'
    const jumpLine = '%0A'
    let aditionaltextOrderFormat = aditionaltextOrder.replace(' ', '%20')

    itemsCartList.forEach((item) => {
      const currencyPrice = numberToCurrencyFormat(item.price)
      aditionaltextOrderFormat += `${item.title}${separatorText}${currencyPrice}${jumpLine}`
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
      aria-label="Hacer Pedido"
      className={classes.button}
      onClick={sendOrderFunction}
    >
      Hacer Pedido
    </Button>
  )
}

export default SendOrderButton
