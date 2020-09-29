/* import external modules */
import { Send } from '@material-ui/icons'
import { Button, Grid, IconButton } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const SendOrderButton = () => {
  const classes = useStyles()

  const sendOrderFunction = () => {
    const baseUrlWhatsappApi =
      'https://wa.me/573128454878?text=Estoy%20interesado%20en%20%20la%20mejor%20%20pizza'
    window.open(
      baseUrlWhatsappApi,
      'Home Pizza',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=300,height=500,width=700,modal=yes,alwaysRaised=yes'
    )
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Button
        aria-label="Hacer Pedido"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Send />}
        onClick={sendOrderFunction}
      >
        Hacer Pedido
      </Button>
    </Grid>
  )
}

export default SendOrderButton
