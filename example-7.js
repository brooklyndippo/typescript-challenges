"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
exports.__esModule = true;
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["Heart"] = 0] = "Heart";
    Suit[Suit["Club"] = 1] = "Club";
    Suit[Suit["Spade"] = 2] = "Spade";
    Suit[Suit["Diamond"] = 3] = "Diamond";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var ace = {
    suit: Suit.Diamond,
    value: 1
};
