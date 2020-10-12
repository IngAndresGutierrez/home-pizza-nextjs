/* import external modules */
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { Fragment, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { PersistGate } from 'redux-persist/integration/react'

/* import internal modules */
import { useStore } from '../redux/store'
import theme from '../components/common/Theme'
import Loading from '../components/common/Loading'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Fragment>
          <Head>
            <title>Home Pizza | La verdadera pizza</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Fragment>
      </PersistGate>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
