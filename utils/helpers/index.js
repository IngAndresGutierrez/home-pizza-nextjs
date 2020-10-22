export const numberToCurrencyFormat = (number) => {
  return `$${number
    ?.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`
}

export const getNumberAddedProducts = (listProducts) => {
  let numberAddedProducts = 0

  listProducts.forEach((item) => {
    numberAddedProducts += item.badge
  })

  return numberAddedProducts
}
