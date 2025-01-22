'use strict'
'use strict'
console.log( "WeakSet" )
const obA = { a: 100 }
let obB = { b: 300 }
const C = {c: 9999}
const weakSet = new WeakSet( [ obA, obB ] )
console.log( weakSet )
weakSet.add( C )
console.log( weakSet )
obB = null
setTimeout(() => console.log( weakSet ), 10_000)

const cache = new WeakSet()

function getCache ( obj )
{
    if ( !cache.has( obj ) )
    {
        const result = { result: 99_999_000 } //! Here is a difficult calculating
        cache.add( result )
    }
    return cache
}

const result = getCache( obA )
console.log( result, 'RESULT' )
// console.log( Array.isArray( result ) )
// const countries = [ 'BELARUS', 'USA', 'GBR', 'BELARUS', 'UKRAINE', 'BELARUS' ]
// const setOfCountries = new Set(countries)
// console.log( setOfCountries )
// console.log( Array.isArray( setOfCountries ) )
