"use strict";
// Set the types here. There are two arrays below
// Type an array like this: 
// const nums: number[] = []
// or 
// const nums: Array<number>
exports.__esModule = true;
exports.randomChar = exports.random = void 0;
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
// The first should be type number
// The second should type string
// Add the types for the function and other variables
var nums = [];
var chars = [];
function random(n) {
    return Math.floor(Math.random() * n);
}
exports.random = random;
function randomChar() {
    return String.fromCharCode(random(26) + 97);
}
exports.randomChar = randomChar;
for (var i = 0; i < 6; i += 1) {
    nums.push(random(100));
    chars.push(randomChar());
}
console.log(nums);
console.log(chars);
