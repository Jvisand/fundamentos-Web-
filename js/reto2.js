function convertirMoneda() {
    const tipoCambio = parseFloat(document.getElementById('tipoCambio').value);
    const monto = parseFloat(document.getElementById('monto').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const resultadoInput = document.getElementById('resultado');

    // Validaciones básicas
    if (isNaN(tipoCambio) || tipoCambio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un tipo de cambio válido (mayor que 0).',
        });
        resultadoInput.value = '';
        return;
    }

    if (isNaN(monto)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un monto válido.',
        });
        resultadoInput.value = '';
        return;
    }

    if (!monedaOrigen) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccione la moneda de origen.',
        });
        resultadoInput.value = '';
        return;
    }

    let resultado;
    let monedaDestino;

    if (monedaOrigen === 'dolares') {
        resultado = monto * tipoCambio;
        monedaDestino = 'Colones';
    } else if (monedaOrigen === 'colones') {
        resultado = monto / tipoCambio;
        monedaDestino = 'Dólares';
    }

    resultadoInput.value = `${resultado.toFixed(2)} ${monedaDestino}`;

    Swal.fire({
        icon: 'success',
        title: 'Conversión Exitosa',
        text: `${monto.toFixed(2)} ${monedaOrigen} son ${resultado.toFixed(2)} ${monedaDestino}`,
    });
}