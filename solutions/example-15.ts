// This function returns a function that returns a string
function sayHello1(): () => string {
    return () => 'Hello!'
}
// This variable contains a function that returns a string
const helloz = sayHello1()
// Calling the function returns the string
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!

function mathematizers(n: number): (x: number) => number {
    let sum = n
    return (x) => x * n
}

const ms = mathematizers(3)
console.log( m(3) )   // 9
console.log( m(2) )   // 6
console.log( m(10) )  // 30
console.log( m(111) ) // 333












