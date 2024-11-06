const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        age: years,
        gender: gender,
        address: address
    }
}

let person = createPerson('Daniel', 'Aguarón', 19, 'male', 'Calle Ronda 11');
assert.strictEqual(person.name, 'Daniel');
assert.strictEqual(person.lastname, 'Aguarón');
assert.strictEqual(person.age, 19);
assert.strictEqual(person.gender, 'male');
assert.strictEqual(person.address, 'Calle Ronda 11');

console.log(person);