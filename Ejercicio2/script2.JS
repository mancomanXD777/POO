// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'Ahora' y 'FechaNac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function MiEdad() {
let Ahora = 2024;
let FechaNac = 2005;
let Resultado = Ahora - FechaNac;
alert("Mi edad es: " + Resultado);


// Tu código aquí
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'Var1' a 'Var2' y luego muestra el valor de 'Var2'.
function asignarValores() {
let Var1 = 37;
let Var2 = Var1;
alert("El valor de Var2 es: " + Var2);

// Tu código aquí
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'Num1' y 'Num2', resta 'Num1' de 'Num3', multiplica 'Num2' por 'Num3', y divide 'Num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
let Num2 = 745;
let Num1 = 180;
let Num3 = 45;
let suma = Num1 + Num2;
let resta = Num1 - Num3;
let multi = Num2 * Num3;
let divi = Num1 / 120;

alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi );

// Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'nombre' y 'apellido'.
// Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
function manipularCadenas() {
let nombre = "Juan";
let apellido = "Pérez";
let mensaje = "El se llama: " + nombre + " " + apellido;
let longitud = mensaje.length;
alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nPrimer Caracter: " + mensaje[0]);
// Tu código aquí
}