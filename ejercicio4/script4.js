function contarCreciente() {
let contador = 0;
let lista = document.getElementById("lista");

while (contador <= 100) {
    let elementoLista = document.createElement("li");
    elementoLista.appendChild(document.createTextNode(contador));
    lista.appendChild(elementoLista);
    contador += 5;
}

}
