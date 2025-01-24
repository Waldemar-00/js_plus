'use strict'
performance.mark('start')
window.setTimeout( ( message, message_1 ) =>
{
    // console.log( performance.now() )
    console.log( message )
    console.log( message_1 )
}, 1000, 'Hello', 'Bonjour' )
performance.mark('end')
performance.measure( 'Time work of our setTimeout', 'start', 'end' )

const duration = performance.getEntriesByName( 'Time work of our setTimeout' )[0].duration
console.log( duration, 'DURATION' )


//! TASK
console.log( 'TASK________________' )
const h2 = document.querySelector( '.cook-time' )
console.log( h2 )

function pizzaIsReady ( timeOrder )
{
    const cookTime = 20 * 60 * 1000
    const readyTime = timeOrder.getTime() + cookTime + 100

    const interval = setInterval( () =>
    {
        let limitTime = readyTime - new Date()
        const intlTime = Intl.DateTimeFormat( navigator.language, {
            minute: 'numeric',
            second: 'numeric'
        }).format( limitTime )
        h2.textContent = intlTime.toString()

        if( limitTime < 0 ) {
            clearInterval( interval )
            h2.textContent = 'Bone Appetite!'
        }
    }, 1000)
}

pizzaIsReady(new Date())