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