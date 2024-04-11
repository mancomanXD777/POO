function contar(){
    let contador = 20;
    let array = []

    while (contador >= 10){
            array.push(contador);
            contador--;
    }
document.getElementById('lista').innerHTML = <p>numeros del 20 al 10</p>;
}
