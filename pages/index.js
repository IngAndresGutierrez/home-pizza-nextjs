import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import cards from '../constants/products'
import Layout from '../components/Layout'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const Landing = () => {
  const classes = useStyles()

  const addToItemsCartList = () => {
    const baseUrlWhatsappApi =
      'https://wa.me/573128454878?text=Estoy%20interesado%20en%20%20la%20mejor%20%20pizza'

    window.open(
      baseUrlWhatsappApi,
      'Home Pizza',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=300,height=500,width=700,modal=yes,alwaysRaised=yes'
    )
  }

  const showInfo = () => {
    alert('¡Modal!')
  }

  return (
    <Fragment>
      <Layout>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Home Pizza
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        aria-label="Agregar al carrito de compras"
                        color="primary"
                        onClick={showInfo}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Agregar al carrito de compras"
                        color="primary"
                        onClick={addToItemsCartList}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </Layout>
    </Fragment>
  )
}

export default Landing
