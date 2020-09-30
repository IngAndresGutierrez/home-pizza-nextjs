/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
}))

export default useStyles
