const numero = parseInt(prompt("ingresa un numero:"));

console.log(`tabla de multiplicacion del ${numero}`);

for (let i = 1; i <= 10; i++)  {
    const resultado = numero * i;
    console.log(`${numeros} X ${resultado}`);
}

const cadenaOriginal = prompt("ingresa una cadena de texto");
const caracteresArray = cadenaOriginal.split("");
for (let i = 0; i < Math.floor(caracteresArray.length / 2); i++){
    const temp = caracteresArray[i];
    caracteresArray[i] = caracteresArray[caracteresArray.length - 1 - i];
    caracteresArray[caracteresArray.length - 1 - i] = temp;
}
const cadenaInvertida = caracteresArray.join("");
console.log(`la cadena invertida es: ${cadenaInvertida}`);