"use strict";
// This example has some tuples. 
// These are arrays with mixed types. 
// Define a tuple type for each. 
// Add the types for the variables and function
exports.__esModule = true;
exports.displayNutrition = void 0;
// Define the type for a tuple like this: 
// const things: [string, number]
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
var snack1 = ['Cookies', 142];
var snack2 = ['Avocado', 234];
var snack3 = ['Banana', 105];
function displayNutrition(food) {
    return "Item: ".concat(food[0], " Calories: ").concat(food[1]);
}
exports.displayNutrition = displayNutrition;
console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));
