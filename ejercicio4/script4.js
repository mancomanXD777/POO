function contarwhile(){
    let contador = 0;
    let array = [5];

    while (contador >= 100){
            array.push(contador);
            contador++;
    }
    document.getElementById("lista").innerHTML = `<p>contador del 0 al 100 de 5 en 5 con while</p> <br><h2 > ${Array} </h2></br>`;
console.log( contador() );
}