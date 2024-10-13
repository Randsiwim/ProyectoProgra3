// Validación del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Ajustar si hay un formulario global
    const cliente = document.getElementById("cliente");
    const tecnico = document.getElementById("tecnico");
    const fecha = document.getElementById("fecha");
    const incidencia = document.getElementById("incidencia");
    const boleta = document.getElementById("boleta");

    // Añadir evento cuando el usuario intente enviar el formulario
    form.addEventListener("submit", function (event) {
        let valid = true; // Suponemos que el formulario es válido

        // Resetear los errores previos
        resetErrors();

        // Validar que los campos no estén vacíos
        if (cliente.value.trim() === "") {
            showError(cliente, "El campo Cliente es obligatorio.");
            valid = false;
        }
        if (tecnico.value.trim() === "") {
            showError(tecnico, "El campo Técnico es obligatorio.");
            valid = false;
        }
        if (fecha.value === "") {
            showError(fecha, "El campo Fecha es obligatorio.");
            valid = false;
        }
        if (incidencia.value.trim() === "") {
            showError(incidencia, "El campo Nro de incidencia es obligatorio.");
            valid = false;
        } else if (!isNumber(incidencia.value)) {
            showError(incidencia, "El Nro de incidencia debe ser un número.");
            valid = false;
        }
        if (boleta.value.trim() === "") {
            showError(boleta, "El campo Nro de boleta es obligatorio.");
            valid = false;
        } else if (!isNumber(boleta.value)) {
            showError(boleta, "El Nro de boleta debe ser un número.");
            valid = false;
        }

        // Si no es válido, prevenir el envío del formulario
        if (!valid) {
            event.preventDefault();
        }
    });

    // Función para mostrar errores
    function showError(element, message) {
        const error = document.createElement("div");
        error.classList.add("error");
        error.textContent = message;
        element.parentNode.appendChild(error);
    }

    // Resetear mensajes de error
    function resetErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function (error) {
            error.remove();
        });
    }

    // Función para verificar si un valor es un número
    function isNumber(value) {
        return /^\d+$/.test(value);
    }
});

