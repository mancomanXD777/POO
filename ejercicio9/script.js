const botonContador = document.getElementById('botonContador');
const contador = document.getElementById('contador');

let clicks = 0;

botonContador.addEventListener('click', function() {
clicks++;
contador.textContent = clicks;
});
