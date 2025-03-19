window.onload = function() {
    document.getElementById('imagenDeSalida').innerHTML = "<img src='img/International_Pokémon_logo.png' alt='Logo pokemon'/>"

    document.getElementById('regiones').onchange = function(region) {
        n = region.target.value;
        let imagen = "<img src='img/combo/" + n + ".png' class='img-fluid img-thumbnail rounded' alt='Region'/>";
        let texto = [
            "Kanto (Kanto en inglés, カントー Kantō en japonés) es una región del mundo Pokémon situada al este de Johto y al sur de Sinnoh. Su paisaje está inspirado en la zona de Japón del mismo nombre, la región de Kantō.",
            "Johto (Johto en inglés, ジョウト Jōto en japonés) es una región del mundo Pokémon situada al oeste de Kanto. Su paisaje está inspirado en la zona de Japón llamada región de Kinki y el oeste de la región de Tōkai.",
            "Hoenn (ホウエン Hōen en japonés) es la región del mundo Pokémon donde se desarrolla la trama de los videojuegos Pokémon Rubí, Zafiro y Esmeralda y sus remakes, Pokémon Rubí Omega y Pokémon Zafiro Alfa.",
            "Sinnoh ( シンオウ地方, Shin'ō-chihō) es una región del mundo Pokémon. Está al norte de Kanto. Su paisaje está inspirado en la zona de Japón, Hokkaidō."
        ];
        document.getElementById('imagenDeSalida').innerHTML = imagen;
        document.getElementById('textoDeSalida').innerHTML = texto[n - 1];



    };
};

document.getElementById('btnLimpiar').onclick = function() {
    document.getElementById('imagenDeSalida').innerHTML = "<img src='img/International_Pokémon_logo.png' alt='Logo pokemon' class='bg-image '/>";
    document.getElementById('textoDeSalida').innerHTML = "Binvenido al mundo pokemon";
    document.getElementById('regiones').value = '';

};