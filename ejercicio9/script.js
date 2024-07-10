function Boton() {
// Seleccionar el botón y el elemento para mostrar el contador
const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');

// Inicializar el contador de clics
let clickCount = 0;

// Agregar el evento de clic al botón
clickButton.addEventListener('click', () => {
  // Incrementar el contador de clics
clickCount++;

// Actualizar el texto del elemento que muestra el contador
clickCountSpan.textContent = clickCount;
});
}