document.addEventListener('DOMContentLoaded', function() {
    const votacionForm = document.getElementById('votacionForm');
    const reporteVotos = document.getElementById('reporteVotos');
    const reporte = document.getElementById('reporte');

    let votos = [];

    votacionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreCompleto = document.getElementById('nombreCompleto').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const anioNacimiento = document.getElementById('anioNacimiento').value;
        const terminos = document.querySelector('input[name="terminos"]:checked');

        if (nombreCompleto === '' || cedula === '' || correo === '' || anioNacimiento === '' || !terminos) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos y acepta los términos.'
            });
            return;
        }

        const voto = {
            nombreCompleto: nombreCompleto,
            cedula: cedula,
            correo: correo,
            anioNacimiento: anioNacimiento,
            terminos: terminos.value
        };

        votos.push(voto);
        Swal.fire({
            icon: 'success',
            title: 'Voto Registrado',
            text: 'El voto se ha registrado con éxito.'
        });
        votacionForm.reset();
    });

    reporteVotos.addEventListener('click', function() {
        if (votos.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Reporte de Votos',
                text: 'No hay votos registrados.'
            });
            return;
        }

        let votosSi = 0;
        let votosNo = 0;

        votos.forEach(voto => {
            if (voto.terminos === 'si') {
                votosSi++;
            } else {
                votosNo++;
            }
        });

        const reporteHTML = `
            <h2>Recuento de Votos</h2>
            <p><strong>Sí:</strong> ${votosSi}</p>
            <p><strong>No:</strong> ${votosNo}</p>
        `;
        reporte.innerHTML = reporteHTML;
    });
});