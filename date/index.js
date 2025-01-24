'use strict'

console.log( new Date( '03-21-2025' ) )
console.log( new Date( '03/21/2025' ) )
console.log( new Date( '2025-03-21' ) ) //! Browsers don't recognize this format, with it works JS so like a result we have next string in the console: Fri Mar 21 2025 03:00:00 GMT+0300 (Москва, стандартное время). JS uses UTC.
console.log( new Date( '21 March 2025' ) )
console.log( new Date( 'Mar 21 2025 07:15:00' ) )

console.log( new Date( 2025, 2, 21, 7, 15, 0 ) ) //! Months start from zero - 0

console.log( new Date( 2025, 2, 21 + 100 ) )

//!_______________________________________-
console.log('________________________________');

const date_1_23_25 = new Date( 2025, 0, 23 )
console.log( date_1_23_25, Number( date_1_23_25 ) )

const date_9_23_25 = new Date( 2025, 8, 23 )
console.log( date_9_23_25, Number( date_9_23_25 ) )

const delta = Number( date_9_23_25 ) - Number( date_1_23_25 )
console.log( delta )
console.log( date_9_23_25 - date_1_23_25 )

console.log( delta / ( 1000 * 60 * 60 * 24 ) )

//! function
console.log( 'FUNCTION _________________' )
const user = {
    name: 'Peter',
    birthDate: '01-23-1987'
}
function isBirthday ( user )
{
    const birthDate = new Date( user.birthDate )
    const dateNow = new Date()

     return  dateNow.getMonth() !== birthDate.getMonth()
                ? false
                    : dateNow.getDate() !== birthDate.getDate()
                        ? false
                            : true

}
console.log( isBirthday( user ) )


//! Intl

console.log('Intl ______________________')

const dateIntl = new Date()
console.log( Intl.DateTimeFormat( 'be-BY' ).format( dateIntl ) )

console.log( Intl.DateTimeFormat( 'be-BY', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    weekday: 'long',
    year: '2-digit'
} ).format( dateIntl ), 'be-BY' )

console.log( Intl.DateTimeFormat( navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    weekday: 'long',
    year: '2-digit'
} ).format( dateIntl ), navigator.language ) //! NOT BY -- RU!!!!!!!!!!!! If you use Russian language in browser!

console.log( Intl.DateTimeFormat( 'en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    weekday: 'long',
    year: '2-digit'
} ).format( dateIntl ), 'en-US' )

console.log( Intl.DateTimeFormat( 'en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    weekday: 'long',
    year: '2-digit'
} ).format( dateIntl ), 'en-GB' )