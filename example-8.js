"use strict";
// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape. 
// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!
exports.__esModule = true;
exports.KaijuType = exports.Kaiju = void 0;
var KaijuType;
(function (KaijuType) {
    KaijuType[KaijuType["flying"] = 0] = "flying";
    KaijuType[KaijuType["lizard"] = 1] = "lizard";
    KaijuType[KaijuType["ape"] = 2] = "ape";
})(KaijuType || (KaijuType = {}));
exports.KaijuType = KaijuType;
var Kaiju = /** @class */ (function () {
    function Kaiju(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }
    return Kaiju;
}());
exports.Kaiju = Kaiju;
