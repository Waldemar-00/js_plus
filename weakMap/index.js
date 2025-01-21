'use strict'
console.log( "WeakMap" )

const weakMap = new WeakMap()
const obA = { a: 100 }
let obB = { b: 300 }
const C = {c: 9999}
weakMap.set( obA, 7000 )
weakMap.set( obB, 1111 )
weakMap.set(C, 9999 )
console.log( weakMap )
obB = null
setTimeout(() => console.log( weakMap ), 10_000)

const cache = new WeakMap()

function getCache ( obj )
{
    if ( !cache.has( obj ) )
    {
        const result = 99_999_000 //! Here is a difficult calculating
        cache.set(obj, result)
    }
    return cache
}

const result = getCache( obA )
console.log( result, 'RESULT' )
