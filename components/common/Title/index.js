/* import external modules */
import { Container, Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const TitleComponent = ({ title, variantProp }) => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant={variantProp}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
      </Container>
    </div>
  )
}

export default TitleComponent
