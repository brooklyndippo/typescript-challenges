"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
exports.__esModule = true;
var example_8_1 = require("./example-8");
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
function rampage(kaiju, city) {
    var name = kaiju.name, type = kaiju.type, power = kaiju.power;
    var action;
    switch (type) {
        case example_8_1.KaijuType.ape:
            action = 'smash';
            break;
        case example_8_1.KaijuType.lizard:
            action = 'burn';
            break;
        case example_8_1.KaijuType.flying:
            action = 'flap';
            break;
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
var gojira = new example_8_1.Kaiju('Gojira', example_8_1.KaijuType.lizard, 90);
var kingkong = new example_8_1.Kaiju('King Kong', example_8_1.KaijuType.ape, 100);
var dragon = new example_8_1.Kaiju('Dragon', example_8_1.KaijuType.flying, 40);
// Define two more monsters
console.log(rampage(gojira, 'tokyo'));
console.log(rampage(kingkong, 'new york city'));
console.log(rampage(dragon, 'london'));
// Set the new monsts to rampage in a city
