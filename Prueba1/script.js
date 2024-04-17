/* Recibir un arreglo numerico con numeros negativos y positivos todos los valores negativos remplazarlos por 0 */

function noNegative(arr){

    for(let i = 0; i < arr.length; i++){
    var lista = document.getElementById('lista');
        if(arr[i] < 0){
            arr[i] = 0;
            lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva
            lista.innerHTML += '<li>' + array[arr] + '</li>';
        }
    }





    return arr;
};



var lista = document.getElementById('lista');
let array = [-2,5,-6,10]
noNegative(Array);

