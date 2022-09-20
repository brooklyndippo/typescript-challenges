// This function returns a function that returns a string
// Add the types: 
function sayHello() {
    return function () { return 'Hello!'; };
}
// This variable contains a function that returns a string
var hello = sayHello();
// Calling the function returns the string
console.log(hello()); // Hello!
console.log(hello()); // Hello!
console.log(hello()); // Hello!
console.log(hello()); // Hello!
function mathematizer(n) {
    var sum = n;
    return function (x) { return x * n; };
}
var m = mathematizer(3);
console.log(m(3)); // 9
console.log(m(2)); // 6
console.log(m(10)); // 30
console.log(m(111)); // 333
