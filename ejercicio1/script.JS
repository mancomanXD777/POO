//ejercicios creacion de variable
//Una variable global de tipo var para mostrar el alcance global
var global = "Global";
//Variable local
let local = "Local";
//variable constante
const constante = "Constante";
let Num = 4;
let Decimal= 10.45;
let String = "texto";
let Bool = true;
let Array = ["Emil", "Elias", "Nicolas", "Esteban"];
let Objeto = { edad:17, nombre: "Emil", curso: "4°"};
let Indefinida; 
let Nula = null;
function sumar() {
return 5 + 7;
};

console.log( sumar() );

console.log("variables:\nNum: " + Num + " \nDecimal: " + Decimal + "\nString: " + String + "\nBool: " + Bool + "\nArray: " + Array + "\nObjeto: " + JSON.stringify(Objeto) + "\nIndefinida: " + Indefinida + "\nNula: " + Nula + "\nResultado de funcion: " + sumar());
console.log("variables: Global: " + global + "- Local: " + local + "- Constante:" + constante)
