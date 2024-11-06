document.addEventListener("DOMContentLoaded", function () {
    // Elementos de referencia
    const preguntaSi = document.getElementById("pregunta_si");
    const opciones = document.getElementById("opciones");
    const condiciones = document.getElementById("condiciones");
    const privacidad = document.getElementById("privacidad");
    const submitButton = document.getElementById("submit");
    const nameInput = document.querySelector("input[name='name']");
    const surnameInput = document.querySelector("input[name='surname']");
    const descriptionTextarea = document.querySelector("textarea[name='description']");
    const form = document.forms["main_form"];

    
    opciones.disabled = true;
    submitButton.disabled = true;

   
    function toggleSubmitButton() {
        submitButton.disabled = !(condiciones.checked && privacidad.checked);
    }

   
    function toggleSelect() {
        opciones.disabled = !preguntaSi.checked;
    }

    function validateForm(event) {
   
        submitButton.disabled = true;

        let errors = [];
        if (nameInput.value.trim() === "") {
            errors.push("El campo 'Nombre' es obligatorio.");
        }
        if (surnameInput.value.trim() === "") {
            errors.push("El campo 'Apellidos' es obligatorio.");
        }
        if (descriptionTextarea.value.length > 80) {
            errors.push("La descripción no puede superar los 80 caracteres.");
        }

    
        if (errors.length > 0) {
            alert(errors.join("\n"));
            event.preventDefault();
            submitButton.disabled = false; 
        }
    }

 
    condiciones.addEventListener("change", toggleSubmitButton);
    privacidad.addEventListener("change", toggleSubmitButton);
    preguntaSi.addEventListener("change", toggleSelect);
    document.getElementById("pregunta_no").addEventListener("change", toggleSelect);
    document.getElementById("pregunta_nsnc").addEventListener("change", toggleSelect);
    form.addEventListener("submit", validateForm);

    descriptionTextarea.addEventListener("input", function () {
        if (this.value.length > 80) {
            this.value = this.value.slice(0, 80);
            alert("La descripción no puede superar los 80 caracteres.");
        }
    });
});
