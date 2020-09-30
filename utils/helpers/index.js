export const numberToCurrencyFormat = (number) => {
  const numberFormatObject = new Intl.NumberFormat()
  const numberFormat = numberFormatObject.format(number)
  const completeFormat = `$${numberFormat}`
  return completeFormat
}
