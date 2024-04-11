function generarLista() {
    var lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

    var i = 0;
    while (i <= 100) {
    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(i));
    lista.appendChild(listItem);
    i += 5;
    }
}

