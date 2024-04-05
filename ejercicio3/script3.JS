function compararNumeros() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Comparar los números
    if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
    alert(num2 + " es menor que " + num1);
    } else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
    alert(num1 + " es menor que " + num2);
    } else {
    alert("Los números son iguales");
    }
}

function temperatura() {

// Definir la temperatura actual en grados Celsius
var temperatura = parseFloat(document.getElementById('temperatura').value);

// Mostrar un mensaje de acuerdo a la temperatura
if (temperatura < 0) {
console.log("¡Hace mucho frío!");
} else if (temperatura >= 0 && temperatura < 10) {
console.log("Hace frío");
} else if (temperatura >= 10 && temperatura < 20) {
console.log("La temperatura es agradable");
} else if (temperatura >= 20 && temperatura < 30) {
console.log("Hace calor");
} else {
console.log("¡Hace mucho calor!");
}

}