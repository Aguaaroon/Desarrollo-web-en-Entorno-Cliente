const assert = require('assert').strict;

function select(array, condition){
    return array.filter(condition);
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

function pairs(num) {
    return num % 2 === 0;
}

function min15(num) {
    return num > 15;
}

function max10(num) {
    return num < 10;
}

assert.deepStrictEqual(select(values, pairs), [2])
assert.deepStrictEqual(select(values, min15),[17, 23, 29])
assert.deepStrictEqual(select(values, max10),[1, 2, 3, 5, 7])

console.log("TODO CORRECTO");