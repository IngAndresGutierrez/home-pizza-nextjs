/* import external modules */
import { Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import Copyright from '../Copyright'

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
        La verdadera pizza
      </Typography>
      <Copyright />
    </footer>
  )
}

export default Footer
