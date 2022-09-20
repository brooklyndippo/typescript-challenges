"use strict";
// Add types here. Be sure to set the types for: 
// - variables
// - function parameters
// - function return
exports.__esModule = true;
exports.printCopy = void 0;
function printCopy(str, n) {
    var result = '';
    for (var i = 0; i < n; i += 1) {
        result += str + '\n';
    }
    return result;
}
exports.printCopy = printCopy;
console.log(printCopy('hello', 3));
