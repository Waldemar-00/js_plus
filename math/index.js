function from1To20(from, to) {
    return Math.floor( Math.random() * to + Number( from ) )
}

// console.log( from1To20( 1, 20 ) )
// console.log( Number.MAX_SAFE_INTEGER )
// console.log( Number.MIN_SAFE_INTEGER )
// console.log( Number.MAX_VALUE )

const bigNumber = BigInt( 7118037103868371788939097945 ) //! not correct: 7118037103868372207144009728n
console.log( bigNumber ) //! not correct: 7118037103868372207144009728n
const biIntFromString = BigInt('7118037103868371788939097945') //* 7118037103868371788939097945n
console.log( biIntFromString ) //* 7118037103868371788939097945n

console.log( 10n / 3n ) //! return 3n because bigInt works only with integers

console.log(typeof biIntFromString )
