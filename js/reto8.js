document.addEventListener('DOMContentLoaded', function() {
    const ventaForm = document.getElementById('ventaForm');
    const ventasSelect = document.getElementById('ventasSelect');
    const ventaDetalles = document.getElementById('ventaDetalles');

    let ventas = [];

    ventaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const vendedor = document.getElementById('vendedor').value.trim();
        const numVentas = parseInt(document.getElementById('numVentas').value);
        const totalVentas = parseFloat(document.getElementById('totalVentas').value);

        if (vendedor === '' || isNaN(numVentas) || isNaN(totalVentas) || numVentas <= 0 || totalVentas <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos correctamente.'
            });
            return;
        }

        const promedioVentas = totalVentas / numVentas;

        const venta = {
            vendedor: vendedor,
            numVentas: numVentas,
            totalVentas: totalVentas,
            promedioVentas: promedioVentas
        };

        ventas.push(venta);
        actualizarSelect();
        ventaForm.reset();

        Swal.fire({
            icon: 'success',
            title: 'Venta Guardada',
            text: 'La venta se ha guardado correctamente.'
        });
    });

    ventasSelect.addEventListener('change', function() {
        const index = ventasSelect.value;
        if (index !== '') {
            const venta = ventas[index];
            ventaDetalles.innerHTML = `
                <p><strong>Vendedor:</strong> ${venta.vendedor}</p>
                <p><strong>Número de Ventas:</strong> ${venta.numVentas}</p>
                <p><strong>Total de Ventas:</strong> ${venta.totalVentas}</p>
                <p><strong>Promedio de Ventas:</strong> ${venta.promedioVentas.toFixed(2)}</p>
            `;
        } else {
            ventaDetalles.innerHTML = '';
        }
    });

    function actualizarSelect() {
        ventasSelect.innerHTML = '<option value="">Seleccionar Venta</option>';
        ventas.forEach((venta, index) => {
            ventasSelect.innerHTML += `<option value="${index}">${venta.vendedor} - ${venta.totalVentas} - ${venta.promedioVentas.toFixed(2)}</option>`;
        });
    }
});