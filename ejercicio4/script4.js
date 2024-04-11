function generarLista() {
var lista = document.getElementById('lista');
  lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva

for (var i = 0; i <= 100; i += 5) {
    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(i));
    lista.appendChild(listItem);
}
}

