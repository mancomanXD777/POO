let numero = parseint(prompt("indicar cantidad de primeros pares"));
function imprimirPares(limite){
    pares = [];
    sumar = 0;
    for(let i = 2; i <= limite*2; i+=2){
        pares.push(i);
    }
    for(let i = 0; i < pares.length; i++){
        sumar += pares [i];
    }
    console.log(pares.join(" - "));
    return sumar;
};
console.log(`resultado de suma es: ${imprimirPares(numero)}`);