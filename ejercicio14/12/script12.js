let numero = parseint(prompt("indicar cantidad de primeros impares"));
function imprimirImpares(limite){
    impares = [];
    sumar = 0;
    for(let i = 2; i <= limite*2; i+=1){
        impares.push(i);
    }
    for(let i = 0; i < impares.length; i++){
        sumar += pares [i];
    }
    console.log(impares.join(" - "));
    return sumar;
};
console.log(`resultado de suma es: ${imprimirImpares(numero)}`);