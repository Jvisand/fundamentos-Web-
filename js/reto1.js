"use scritct";

function agregar() {

    // Declaro constantes para poder llamar al valor del elemento HTML por su ID.
    const
        inputUsuario = document.getElementById("usuario").value,
        inputArticulo = document.getElementById("articulo").value,
        inputCantidad = Number(document.getElementById("cantidad").value),
        inputPrecio = Number(document.getElementById("precio").value);

    // Creo variables con información de interés para su fácil mantenimiento
    var subtotal = inputPrecio * inputCantidad,

        iva = 0.13,
        costoServicio = 0.05;

    // Estos 3 if nos ayudan a validar que el usuario introduzca la información requerida por la aplicación.

    if (inputArticulo == "") {
        Swal.fire({
            icon: "warning",
            title: "No digitó un artículo",
            text: "Por favor, digite un articulo",
        })
    } else if (inputUsuario == "") {
        Swal.fire({
            icon: "warning",
            title: "No puso el nombre del cliente",
            text: "Por favor, introduzca un nombre de cliente",
        })
    } else if (inputCantidad <= 0) {
        Swal.fire({
            icon: "warning",
            title: "No indicó una cantidad válida de artículos",
            text: "Por favor, introduzca una cantidad válida",
        })
    } else if (inputPrecio <= 0 || inputPrecio == '') {
        Swal.fire({
            icon: "warning",
            title: "No el precio no puede ser menor a 0 o vacio",
            text: "Por favor, introduzca una precio valido",
        })


    } else {

        document.getElementById("campoNombre").innerHTML = "<p>" + "Nombre del cliente: " +
            inputUsuario + "</p>";

        document.getElementById("campoArticulo").innerHTML = "<p>" + "Artículo comprado: " +
            inputArticulo + "</p>";

        document.getElementById("campoCantidad").innerHTML = "<p>" + "Cantidad: " +
            inputCantidad + "</p>";

        if (inputArticulo != "") {

            document.getElementById("campoPrecio").innerHTML = "<p>" + "Precio: " + "$" +
                inputPrecio + "</p>";

            document.getElementById("campoSubtotal").innerHTML = "<p>" + "Subtotal: " + "$" +
                subtotal + "</p>";

            document.getElementById("campoIVA").innerHTML = "<p>" + "IVA 13%: " + "$" +
                subtotal * iva + "</p>";

            document.getElementById("campoServicio").innerHTML = "<p>" + "Servicio 5%: " + "$" +
                subtotal * costoServicio + "</p>";

            document.getElementById("campoTotal").innerHTML = "<p>" + "Total a pagar: " + "$" +
                Number(subtotal + Number(subtotal * iva) + Number(subtotal * costoServicio)) + "</p>"; // Aquí se genera una operación matemática para hacer una suma del iva sobre el valor del subtotal bruto y el servicio sobre el valor del subtotal bruto. Luego se suman al subtotal y se da un monto final.

        }
    }
}

// Función ayuda a limpiar los campos al igualarlos a vacío y recargar la página de nuevo.

function cancelar() {
    inputUsuario = "";
    inputArticulo = "";
    inputCantidad = "";
    inputPrecio = "";

    location.reload();
}