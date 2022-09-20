"use strict";
// Snack type defines a tuple type. Use for 
// all the tuples below. 
// Set the other types. 
exports.__esModule = true;
exports.displayNutrition = void 0;
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
