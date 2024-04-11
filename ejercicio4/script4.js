function lista(){
let lista = document.getElementById("lista");
let contador = 0;

while (contador <= 100) {
    let elementoLista = document.createElement("lista");
    elementoLista.appendChild(document.createTextNode(contador ));
    lista.appendChild(elementoLista);
    contador += 5;
}

}