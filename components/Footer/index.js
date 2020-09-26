import { Typography } from '@material-ui/core'
import Copyright from '../Copyright'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Home Pizza
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        The best pizza
      </Typography>
      <Copyright />
    </footer>
  )
}

export default Footer
