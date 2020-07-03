"use strict";
exports.__esModule = true;
var getCalculatedValue = function (collection) {
    return collection
        .filter(function (number) { return number % 2 === 1; })
        .map(function (number) { return number * 2; })
        .reduce(function (total, current) { return total + current; }, 0);
};
exports["default"] = getCalculatedValue;
