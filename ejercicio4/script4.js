function generarLista() {
    var lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 0;
    while (i <= 100) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 5;
    }
}


function generarsegundaLista() {
    var lista = document.getElementById('lista2');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 0;
    while (i <= 10) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 1;
    }
}

function generarterceraLista() {
    var lista = document.getElementById('lista3');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 2;
    while (i <= 22) {
    lista.innerHTML += '<li>' + i + '</li>';
    i += 2;
    }
}

function compararNumeros() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var num3 = parseFloat(document.getElementById('numero3').value);
    var num4 = parseFloat(document.getElementById('numero4').value);
    var num5 = parseFloat(document.getElementById('numero5').value);

    // Comparar los números
    if (num1 > num2) (num1 > num3)(num1 > num4) (num1 > num5) (num2 > num1) (num2 > num3) (num2 > num4) (num2 > num5) (num3 > num1) (num3 > num2) (num3 > num4) (num3 > num5) (num3 > num2) (num3 > num2){
    alert(num1 + " es mayor que " + num2);
    alert(num2 + " es menor que " + num1);
    } else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
    alert(num1 + " es menor que " + num2);
    } else {
    alert("Los números son iguales");
    }
}
