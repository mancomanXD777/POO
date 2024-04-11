function contarwhile(){
    let contador = 20;
    let array = [];

    while (contador > 0){
            array.push(contador);
            contador--;
    }
document.getElementById("lista").innerHTML = <p>contador del 20 al 10 con while</p>
}