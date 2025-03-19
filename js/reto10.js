document.addEventListener('DOMContentLoaded', function() {
    const cedulaInput = document.getElementById('cedulaInput');
    const buscarBtn = document.getElementById('buscarBtn');
    const resultado = document.getElementById('resultado');

    const empleados = {
        '109110338': {
            nombre: 'Juan',
            apellidos: 'Pérez',
            foto: 'img/empleado1.jpg',
            lugar: 'San José'
        },
        '209110338': {
            nombre: 'María',
            apellidos: 'Gómez',
            foto: 'img/empleado2.jpg',
            lugar: 'Alajuela'
        },
        '309110338': {
            nombre: 'Carlos',
            apellidos: 'Rodríguez',
            foto: 'img/empleado3.jpg',
            lugar: 'Cartago'
        },
        '409110338': {
            nombre: 'Ana',
            apellidos: 'López',
            foto: 'img/empleado4.jpg',
            lugar: 'Heredia'
        },
        '509110338': {
            nombre: 'Luis',
            apellidos: 'Martínez',
            foto: 'img/empleado5.jpg',
            lugar: 'Limón'
        }
    };

    buscarBtn.addEventListener('click', function() {
        const cedula = cedulaInput.value.trim();

        if (cedula === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingrese el número de cédula.'
            });
            return;
        }

        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            resultado.innerHTML = `
                <h2>${empleado.nombre} ${empleado.apellidos}</h2>
                <img src="${empleado.foto}" alt="${empleado.nombre} ${empleado.apellidos}" style="max-width: 200px;">
                <p><strong>Lugar:</strong> ${empleado.lugar}</p>
            `;
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'No Encontrado',
                text: 'El usuario NO existe.'
            });
        }
    });
});