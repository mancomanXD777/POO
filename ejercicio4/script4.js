function contarwhile(){
    let contador = 0;
    let array = [5];

    while (contador >= 100){
            array.push(contador);
            contador--;
    }
    document.getElementById("lista").innerHTML = `<p>contador del 20 al 10 con while</p> <br><h2 > ${Array} </h2></br>`;
}