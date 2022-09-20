"use strict";
// You are making a mapping application. 
exports.__esModule = true;
// Write an enum that defines the directions: 
// North, South, East, West
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["East"] = "East";
    Direction["South"] = "South";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition() {
        this.direction = Direction.North;
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        this.direction = newDirection;
        console.log("New direction: ".concat(this.direction));
        // set the direction on your property 
        // Print the new direction
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return "You are heading ".concat(this.direction);
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.South);
console.log(location.describe());
exports["default"] = MapPosition;
