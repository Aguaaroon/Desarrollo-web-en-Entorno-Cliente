window.onload = function() {
    // Número de enlaces de la página
    const enlaces = document.getElementsByTagName('a');
    console.log("Número de enlaces de la página:", enlaces.length);

    // Dirección a la que enlaza el penúltimo enlace
    if (enlaces.length >= 2) {
        console.log("Dirección del penúltimo enlace:", enlaces[enlaces.length - 2].href);
    } else {
        console.log("No hay suficientes enlaces para obtener el penúltimo.");
    }

    // Número de enlaces que enlazan a "http://prueba"
    const enlacesPrueba = Array.from(enlaces).filter(link => link.href === "http://prueba/");
    console.log("Número de enlaces que apuntan a 'http://prueba':", enlacesPrueba.length);

    // Número de enlaces del tercer párrafo
    const parrafos = document.getElementsByTagName('p');
    if (parrafos.length >= 3) {
        const enlacesTercerParrafo = parrafos[2].getElementsByTagName('a');
        console.log("Número de enlaces en el tercer párrafo:", enlacesTercerParrafo.length);
    } else {
        console.log("No hay suficientes párrafos para obtener el tercero.");
    }

    // Crear un nodo <div> con un nodo <p> dentro y añadirlo al documento
    const nuevoDiv = document.createElement('div');
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = "Este es un nuevo párrafo dentro de un nuevo div.";
    nuevoDiv.appendChild(nuevoParrafo);
    document.body.appendChild(nuevoDiv);
};
