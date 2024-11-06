const assert = require('assert').strict;

function abs(value) {
    if (value < 0){
        return -value;
    }
        return value;
}

assert.strictEqual(abs(10), 10)
assert.strictEqual(abs(-10), 10)
assert.strictEqual(abs(0), 0)

console.log('Todas las pruebas pasaron')