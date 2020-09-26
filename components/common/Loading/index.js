/* import external modules */
import { CircularProgress, Grid } from '@material-ui/core'

const Loading = () => {
  return (
    <Grid container spacing={2} justify="center">
      <CircularProgress color="primary" />
    </Grid>
  )
}

export default Loading
