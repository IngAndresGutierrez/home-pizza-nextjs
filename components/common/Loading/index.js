/* import external modules */
import { CircularProgress, Grid } from '@material-ui/core'

const Loading = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CircularProgress color="primary" />
    </Grid>
  )
}

export default Loading
