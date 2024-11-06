function hola(nombre, apellidos, años) {
    return `Hola ${nombre} ${apellidos}, tienes ${años} años de edad`;
}

let result = hola('Daniel', 'Aguarón', 19);
if (result !== "Hola Daniel Aguarón, tienes 19 años de edad") { 
    console.log('test fail');
    return;
}

console.log('Hola Daniel Aguarón, tienes 19 años de edad');