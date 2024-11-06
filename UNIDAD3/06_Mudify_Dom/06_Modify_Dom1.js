window.onload = function(e) {
    console.log('documento cargado');
   // Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!';
   // Seleccionar el elemento con id == username
    const username = document.getElementById('username');
    console.log(username);
   // Cambiar el color de todos los .first que estén dentro de un artículo
    const allFirst = document.querySelectorAll('article .first');

    for (let item of allFirst) {
        item.style['background-color'] = 'red';
    }
    // Seleccionar todos los elementos li con class="item"
    const allLi = document.querySelectorAll('li.item');

    for (let item of allLi) {
    console.log(item);
    }

    // Seleccionar todos los buttons dentro de class="buttons"
    const allButtons = document.querySelectorAll('.buttons button');

    // Cambiar el color de fondo del primer párrafo
    document.querySelectorAll('p')[0].style['background-color'] = '#ffccff';

    // Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    for (let item of allButtons){
        item.style.color = 'red'
    }

    // Crear nuevos nodos
    let firstArticle = document.querySelector('article')

    let node = document.createElement('p')
    node.innerText = 'Hola mundo añadiendo nodos en el árbol DOM'    
    node.style['background-color'] = 'yellow'
    node.title = 'Párrafo de ejemplo'

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href= 'https://www.google.es'

    node.appendChild(aNode)

    let fullNode = document.createElement('div')
    fullNode.innerHTML = `Esto es un div de ejemplo
    que lleva un link <a href="http://www.marca.es">Marca</a>`

    node.appendChild(fullNode)

    firstArticle.insertBefore(node, firstArticle.childNodes[2])


    // Borrar nodos
    firstArticle.removeChild(firstArticle.childNodes[1])

}
