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