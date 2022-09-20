"use strict";
// Functions can be decribed as a type.
// This happens when you need to pass a callback 
// or have a function that returns another function. 
// Read about function type expressions:
exports.__esModule = true;
exports.dice = exports.next = exports.count = void 0;
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
// This function returns a function that returns a number
function count() {
    var n = 0;
    return function () {
        return n += 1;
    };
}
exports.count = count;
// This function takes an array and returns an item from
// the array
function next(arr) {
    var i = -1;
    return function () {
        i += 1;
        i = i === arr.length ? 0 : i;
        return arr[i];
    };
}
exports.next = next;
// This function returns a function that generates a 
// die roll. 
function dice(sides) {
    return function (n) {
        return Math.floor(Math.random() * sides) * n;
    };
}
exports.dice = dice;
