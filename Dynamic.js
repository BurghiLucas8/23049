
const ApuntadorAlNombre = document.getElementById("nombre");
const ApuntadorAlApellido = document.getElementById("apellido");
const ApuntadorAlCorreo = document.getElementById("correo");
const ApuntadorAlBotonR = document.getElementById("resumen");
const ApuntadorAlBotonB = document.getElementById("borrar");
const valorTicket = 200;
const ApuntadorAlTotal = document.getElementById("TotalAPagar");
const ApuntadorACantidad = document.getElementById("cantidad");
const ApuntadorACategoria = document.getElementById("categoria");

/** target.addEventListener(tipo, listener[, useCapture]); */
ApuntadorAlBotonR.addEventListener("click",FunciónTotal);
ApuntadorAlBotonB.addEventListener("click",Borrar);


function calcularDescuento(categoria) {
    let descuento = 0;
    if (categoria == 1) {
        descuento = 0.8;
    } else if (categoria == 3) {
        descuento = 0.5;
    } else if (categoria == 2) {
        descuento = 0.15;
    }

    return descuento;
}

function FunciónTotal() {
    const cantidad = parseInt(ApuntadorACantidad.value);
    const descuento = calcularDescuento(parseInt(ApuntadorACategoria.value));
    const totalPagar = cantidad * valorTicket * (1 - descuento);
    ApuntadorAlTotal.innerText = "Total a pagar: $" + totalPagar.toFixed(2);
}


function Borrar () {
    ApuntadorAlNombre.value = "";
    ApuntadorAlApellido.value = "";
    ApuntadorAlCorreo.value = "";
    ApuntadorACantidad.value = "";
    ApuntadorAlTotal.value = "";
}