window.onload = function() {
    const enlaces = document.querySelectorAll("a");

    enlaces.forEach((enlace, index) => {
   
        const idSeccion = "contenidos_" + (index + 1);
        const seccion = document.getElementById(idSeccion);

        enlace.onclick = function(event) {
            event.preventDefault(); 

            if (seccion.style.display === "none") {
                seccion.style.display = "block";
                enlace.innerHTML = "Ocultar contenidos";
            } else {
                seccion.style.display = "none";
                enlace.innerHTML = "Mostrar contenidos";
            }
        };
    });
};
