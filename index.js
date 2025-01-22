'use strict'

console.log( new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'USD' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'en-GB', { style: 'currency', currency: 'USD', useGrouping: false } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'en-US', { style: 'currency', currency: 'USD' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'be-BY', { style: 'currency', currency: 'USD' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'be-BY', { style: 'currency', currency: 'BYN' } ).format( 10_000 ) )


console.log( new Intl.NumberFormat( 'en-GB', { style: 'decimal' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'en-US', { style: 'decimal' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'be-BY', { style: 'decimal' } ).format( 10_000 ) )


console.log( new Intl.NumberFormat( 'en-GB', { style: 'percent' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'en-US', { style: 'percent' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'be-BY', { style: 'percent' } ).format( 10_000 ) )


console.log( new Intl.NumberFormat( 'en-GB', { style: 'unit', unit: 'celsius' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'en-US', { style: 'unit', unit: 'celsius' } ).format( 10_000 ) )
console.log( new Intl.NumberFormat( 'be-BY', { style: 'unit', unit: 'celsius' } ).format( 10_000 ) )



async function convertCurrency(amount, fromCurrency, toCurrency) {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    const data = await response.json()
    console.log( data )
    const rate = data.rates[ toCurrency ]
    return { sum: amount * rate, toCurrency }
}

convertCurrency(1000, 'USD', 'BYN').then(result => {
    console.log( new Intl.NumberFormat( 'be-BY', { style: 'currency', currency: result.toCurrency } ).format( result.sum ) )
})
