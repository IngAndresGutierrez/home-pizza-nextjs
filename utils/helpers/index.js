export const numberToCurrencyFormat = (number) => {
  const numberFormatObject = new Intl.NumberFormat()
  const numberFormat = numberFormatObject.format(number)
  const completeFormat = `$${numberFormat}`
  return completeFormat
}

export const getNumberAddedProducts = (listProducts) => {
  let numberAddedProducts = 0

  listProducts.forEach((item) => {
    numberAddedProducts += item.badge
  })

  return numberAddedProducts
}
