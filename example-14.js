"use strict";
// These functions take a function as an argument. 
// Set the type for the parameters
exports.__esModule = true;
exports.callMeMaybe = exports.callYouLater = void 0;
// In all of the functions below type the callback
// This function takes a callback that receives a string. 
function callYouLater(callback, time) {
    setTimeout(function () {
        callback('What it be like?');
    }, time);
}
exports.callYouLater = callYouLater;
function callMeMaybe(callback, probability) {
    setTimeout(function () {
        if (Math.random() * 100 < probability) {
            callback({ success: true, probability: probability });
        }
        return callback({ success: false, probability: probability });
    }, 1000);
}
exports.callMeMaybe = callMeMaybe;
