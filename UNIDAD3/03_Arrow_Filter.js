const assert = require('assert').strict;

const select = (array, condition) => array.filter(condition);

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

const pairs = num => num % 2 === 0;

const min15 = num => num > 15;

const max10 = num => num < 10;

assert.deepStrictEqual(select(values, pairs), [2]);
assert.deepStrictEqual(select(values, min15), [17, 23, 29]);
assert.deepStrictEqual(select(values, max10), [1, 2, 3, 5, 7]);

console.log("TODO CORRECTO");
