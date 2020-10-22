/* import external modules */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Visibility, AddShoppingCart } from '@material-ui/icons'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  NativeSelect,
  Select,
  Typography,
} from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import {
  setAddCartItem,
  setCaculatePriceCart,
} from '../../../redux/actions/cart'
import DialogComponent from '../../common/Dialog'
import ProductDetailedCard from '../ProductDetailedCard'
import {
  numberToCurrencyFormat,
  getNumberAddedProducts,
} from '../../../utils/helpers'

const ProductCardComponent = ({ product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const itemsCartList = useSelector((state) => state.cart.itemsCartList)
  const [selectedSizePrice, setSelectedSizePrice] = useState('')
  const [selectedDrink, setSelectedDrink] = useState('')
  const [errorSize, setErrorSize] = useState(false)
  const [errorDrink, setErrorDrink] = useState(false)
  const [showDrink, setShowDrink] = useState(true)

  useEffect(() => {
    if (selectedSizePrice) {
      setErrorSize(false)
      handleDrink(selectedSizePrice)
    }
    if (selectedDrink) {
      setErrorDrink(false)
    }
  }, [selectedSizePrice, selectedDrink])

  const handleChangeSizePrice = (event) => {
    setSelectedSizePrice(event.target.value)
  }

  const handleChangeDrink = (event) => {
    setSelectedDrink(event.target.value)
  }

  const handleDrink = (resource) => {
    const sizeSelectedPizza = resource.split(',')

    if (sizeSelectedPizza[1] !== 'Mini') {
      setShowDrink(true)
    } else {
      setShowDrink(false)
    }
  }

  const addToItemsCartList = () => {
    const sizeSelectedPizza = selectedSizePrice.split(',')

    if (
      getNumberAddedProducts(itemsCartList) < 15 &&
      selectedSizePrice &&
      ((sizeSelectedPizza[1] === 'Mini' && !selectedDrink) ||
        (sizeSelectedPizza[1] !== 'Mini' && selectedDrink))
    ) {
      const selectedSizePriceString = selectedSizePrice.split(',')

      const newProduct = {
        id: product.id,
        title: product.title,
        description: product.description,
        ingredients: product.ingredients,
        sizesPrices: product.sizesPrices,
        minPrice: product.minPrice,
        maxPrice: product.maxPrice,
        badge: product.badge,
        coverImage: product.coverImage,
        images: product.images,
        parameterization: {
          selectedPrice: selectedSizePriceString[0],
          selectedSize: selectedSizePriceString[1],
          selectedDrink: selectedDrink,
        },
        indexOnCart: itemsCartList.length,
      }

      dispatch(setAddCartItem(newProduct))
      dispatch(setCaculatePriceCart())
    }

    if (!selectedSizePrice) {
      setErrorSize(true)
    }

    if (!selectedDrink) {
      setErrorDrink(true)
    }

    if (getNumberAddedProducts(itemsCartList) >= 15) {
      alert('Límite de pizzas alcanzado.')
    }
  }

  const renderPriceSizeOptions = product.sizesPrices.map((item, key) => (
    <option key={key} value={`${parseInt(item.price)},${String(item.size)}`}>
      {item.size}
    </option>
  ))

  const renderDrinksOptions = product.drinks.map((item, key) => (
    <option key={key} value={item.name}>
      {item.name}
    </option>
  ))

  return (
    <Card className={classes.card}>
      <CardHeader
        title={product.title}
        subheader={`${numberToCurrencyFormat(
          product.minPrice
        )} - ${numberToCurrencyFormat(product.maxPrice)}`}
      />
      <CardMedia
        className={classes.cardMedia}
        image={product.coverImage}
        title={product.title}
      />

      <CardContent className={classes.cardContent}>
        {/* <Typography gutterBottom variant="h5" component="h4">
          Ingredientes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.ingredients.join(',')}
          {'.'}
        </Typography> */}
        <FormControl className={classes.formControl} error={errorSize}>
          <NativeSelect
            value={selectedSizePrice}
            onChange={handleChangeSizePrice}
            inputProps={{
              name: 'size',
              id: 'size-native-helper',
            }}
          >
            <option aria-label="None" value="" disabled>
              Tamaño
            </option>
            {renderPriceSizeOptions}
          </NativeSelect>
          {errorSize && (
            <FormHelperText>Selecciona el tamaño de tú pizza</FormHelperText>
          )}
        </FormControl>

        {selectedSizePrice && showDrink && (
          <FormControl className={classes.formControl} error={errorDrink}>
            <NativeSelect
              value={selectedDrink}
              onChange={handleChangeDrink}
              inputProps={{
                name: 'drink',
                id: 'drink-native-helper',
              }}
            >
              <option aria-label="None" value="" disabled>
                Gaseosa GRATIS
              </option>
              {renderDrinksOptions}
            </NativeSelect>
            {errorDrink && (
              <FormHelperText>Selecciona el sabor de tú gaseosa</FormHelperText>
            )}
          </FormControl>
        )}
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="Agregar al carrito de compras"
          color="primary"
          onClick={addToItemsCartList}
        >
          <AddShoppingCart />
        </IconButton>
        {/* <DialogComponent
          titleDialog={product.title}
          isIconOpenButton={true}
          iconOpenButton={<Visibility />}
          colorOpenButton={'secondary'}
          ariaLabelOpenButton={'Agregar al carrito de compras'}
          contentDialog={
            <ProductDetailedCard product={product} isBoxShadowEnable={false} />
          }
        /> */}
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent
