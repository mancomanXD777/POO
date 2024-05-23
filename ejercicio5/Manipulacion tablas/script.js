const numero = parseInt(prompt("ingresa un numero:"));

console.log(`tabla de multiplicacion del ${numero}`);

for (let i = 1; i <= 10; i++)  {
    const resultado = numero * i;
    console.log(`${numeros} X ${resultado}`);
}