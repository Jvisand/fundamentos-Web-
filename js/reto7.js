document.addEventListener('DOMContentLoaded', function() {
    const mapAreas = document.querySelectorAll('map area');
    const descripciones = document.querySelectorAll('.descripcion-desplegable');
    const botonesCerrar = document.querySelectorAll('.cerrar-descripcion');

    // Ocultar todas las descripciones al inicio
    descripciones.forEach(descripcion => {
        descripcion.style.display = 'none';
    });

    // Mostrar la descripción al hacer clic en un área del mapa
    mapAreas.forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace "#"
            const targetId = this.dataset.target;
            const targetDescripcion = document.getElementById(targetId);

            // Ocultar todas las demás descripciones
            descripciones.forEach(desc => {
                if (desc.id !== targetId) {
                    desc.style.display = 'none';
                }
            });

            // Mostrar la descripción objetivo
            if (targetDescripcion) {
                targetDescripcion.style.display = 'block';
            }
        });
    });

    // Ocultar la descripción al hacer clic en el botón "Cerrar"
    botonesCerrar.forEach(boton => {
        boton.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetDescripcion = document.getElementById(targetId);
            if (targetDescripcion) {
                targetDescripcion.style.display = 'none';
            }
        });
    });
});