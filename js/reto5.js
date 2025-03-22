document.addEventListener('DOMContentLoaded', function() {
    const modeloSelect = document.getElementById('modelo');
    const financiamientoSelect = document.getElementById('financiamiento');
    const plazoSelect = document.getElementById('plazo');
    const calcularBtn = document.getElementById('calcularBtn');
    const imagenCocheDiv = document.getElementById('imagenCoche');

    const costosBase = {
        'sedan': 25000,
        'suv': 32000,
        'deportivo': 45000
    };

    const imagenesCoche = {
        'sedan': 'img/sedan.jpg',
        'suv': 'img/suv.jpg',
        'deportivo': 'img/deportivo.jpg'
    };

    const tasasFinanciamiento = {
        'banco_nacional': 0.05,
        'banco_costa_rica': 0.06,
        'banco_popular': 0.07,
        'bac_san_jose': 0.08
    };

    // Función para habilitar/deshabilitar el botón de calcular
    function actualizarBotonCalcular() {
        calcularBtn.disabled = !(modeloSelect.value && financiamientoSelect.value && plazoSelect.value);
    }

    modeloSelect.addEventListener('change', function() {
        const modeloSeleccionado = this.value;
        financiamientoSelect.disabled = !modeloSeleccionado;
        financiamientoSelect.value = '';
        plazoSelect.disabled = true;
        plazoSelect.value = '';
        imagenCocheDiv.innerHTML = '';

        if (modeloSeleccionado) {
            if (imagenesCoche[modeloSeleccionado]) {
                imagenCocheDiv.innerHTML = `<img src="${imagenesCoche[modeloSeleccionado]}" class="img-fluid rounded" alt="${modeloSeleccionado}">`;
            } else {
                imagenCocheDiv.innerHTML = '<p>Imagen no disponible para este modelo.</p>';
            }
            const precioBase = costosBase[modeloSeleccionado];
            if (precioBase !== undefined) {
                const precioFormateado = precioBase.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });
                const precioTexto = `<p class="mt-2">Precio Base: ${precioFormateado}</p>`;
                imagenCocheDiv.innerHTML += precioTexto;
            }
        }
        actualizarBotonCalcular(); // Actualizar el botón al cambiar el modelo
    });

    financiamientoSelect.addEventListener('change', function() {
        plazoSelect.disabled = !this.value;
        plazoSelect.value = '';
        actualizarBotonCalcular(); // Actualizar el botón al cambiar el financiamiento
    });

    plazoSelect.addEventListener('change', function() {
        actualizarBotonCalcular(); // Actualizar el botón al cambiar el plazo
    });

    calcularBtn.addEventListener('click', function() {
        const modeloSeleccionado = modeloSelect.value;
        const financiamientoSeleccionado = financiamientoSelect.value;
        const plazoSeleccionado = plazoSelect.value;

        if (modeloSeleccionado && financiamientoSeleccionado && plazoSeleccionado) {
            const costoBase = costosBase[modeloSeleccionado] || 0;
            const tasaAnual = tasasFinanciamiento[financiamientoSeleccionado] || 0;
            const plazoAnos = parseInt(plazoSeleccionado);
            const primaPorcentaje = 0.05;
            const montoFinanciado = costoBase * (1 - primaPorcentaje);
            const tasaMensual = tasaAnual / 12;
            const numeroPagos = plazoAnos * 12;

            let cuotaMensual = 0;
            if (tasaMensual > 0) {
                cuotaMensual = (montoFinanciado * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
            } else {
                cuotaMensual = montoFinanciado / numeroPagos;
            }

            const cuotaFormateada = cuotaMensual.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            Swal.fire({
                title: 'Cuota Mensual Estimada',
                html: `<p>Cuota Mensual Estimada (prima del 5%): ${cuotaFormateada} (a ${plazoAnos} años con ${obtenerNombreBanco(financiamientoSeleccionado)})</p>`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, selecciona un modelo, una opción de financiamiento y un plazo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });

    function obtenerNombreBanco(valor) {
        switch (valor) {
            case 'banco_nacional':
                return 'Banco Nacional';
            case 'banco_costa_rica':
                return 'Banco de Costa Rica';
            case 'banco_popular':
                return 'Banco Popular';
            case 'bac_san_jose':
                return 'BAC San José';
            default:
                return 'Opción de Financiamiento';
        }
    }
});