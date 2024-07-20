var arrayWith = require("array.prototype.with");
var assert = require("assert");

var arr = [0, 1, 2, 3, 4, 5];

var results = arrayWith(arr, 3, "c");

assert.deepEqual(results, [0, 1, 2, "c", 4, 5]);
assert.deepEqual(arr, [0, 1, 2, 3, 4, 5]);
