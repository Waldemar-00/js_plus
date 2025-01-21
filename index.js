'use strict'
console.log( 'MAPS' )

const weatherMap = new Map()
console.log( weatherMap )
const some = weatherMap.set( 'London', 10 ).set( 'Mensk', 18 )
//? method SET returns pairs
//? method DELETE returns boolean
//? CLEAR - undefined
// console.log( some )
const numArr = [ 1, 2, 3 ]
weatherMap.set( numArr, 'ARRAY' )
weatherMap.set( 'some', 'SOME' )
console.log( weatherMap.get( numArr ) )
weatherMap.keys().forEach( k =>
{
    console.log(typeof k)
    if ( Array.isArray( k ) ) console.log( k[ 2 ] )
} )
weatherMap.forEach( ( value, index, map ) => console.log( index, value, Array.isArray( map ) ) )

const fastCreatingMap = new Map(
    [
        ['London', 10], ['Mensk', 18]
    ]
)
console.log( fastCreatingMap )

const weatherObject = {
    'London': 10,
    'Mensk': 18,
    'Paris': 21
}

const mapFromObject = new Map( Object.entries( weatherObject ) )
console.log( mapFromObject )
console.log( [ ...mapFromObject ] )
console.log( [ ...mapFromObject.keys() ] )
console.log( [ ...mapFromObject.values() ] )

//? TASK
const weatherObjectTask = {
    'London': 10,
    'Mensk': 18,
    'Paris': 21
}
const mapTask = new Map( Object.entries( weatherObjectTask ) )

const reverseMap = new Map()
mapTask.forEach( ( value, key ) =>
{
    reverseMap.set( value, key )
} )
console.log( reverseMap )

const reverseMap_2 = new Map( [ ...mapTask ].map( arr => arr.reverse() ) )
console.log( reverseMap_2 )
console.log( mapTask )