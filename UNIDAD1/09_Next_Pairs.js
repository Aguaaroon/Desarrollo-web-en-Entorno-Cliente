const assert = require('assert').strict;

function nextPairs(value) {
    if (value % 2 === 0) {
        
        return [value - 2, value + 2];
    } else {
        
        return [value - 1, value + 1];
    }
}

// Pruebas
assert.deepStrictEqual(nextPairs(3), [2, 4]);
assert.deepStrictEqual(nextPairs(4), [2, 6]);

console.log("Todo Corectou");
