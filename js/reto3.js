document.addEventListener('DOMContentLoaded', function() {
    function redirigir() {
        var selector = document.getElementById('selector').value;

        switch (selector) {
            case "1":
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido/a!",
                    text: "Tienda Vortex"
                });

                window.setTimeout(function() {
                    window.location.href = "https://vortexgame.store/";
                }, 1500);
                break;
            case "2":
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido/a!",
                    text: "Tienda Guabaya"
                });

                window.setTimeout(function() {
                    window.location.href = "https://www.guabayagames.com/";
                }, 1500);
                break;
            case "3":
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido/a!",
                    text: "pokefx"
                });

                window.setTimeout(function() {
                    window.location.href = "https://pokefx-store.com/";
                }, 1500);
                break;
            case "4":
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido/a!",
                    text: "Tienda Maxdstore"
                });

                window.setTimeout(function() {
                    window.location.href = "https://maxdstore.minidux.com/";
                }, 1500);
                break;
            case "5":
                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido/a!",
                    text: "Tienda Omega"
                });

                window.setTimeout(function() {
                    window.location.href = "https://www.omegaenlinea.com/";
                }, 1500);
                break;
        }
    }

    window.redirigir = redirigir;
});