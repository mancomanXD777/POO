function boton_3(){
    let numeor_1 = prompt("ingrese el primer numero /regla3")
    let numeor_2 = prompt("ingrese el segundo numero /regla3")
let array = []
let arriba=0
let abajo=0
let punto_b=0
let punto_r=0

array.push(numeor_1,numeor_2)

for(let i = 0; i < array.length;i++){

        punto_r = array[i]
        if(array[i] > punto_r){
            punto_r = array[i]
            arriba += 1
        }

        punto_b = array[i]
        if(array[i] <= punto_b){
            punto_b = array[i]
            abajo += 1
        }
}

if(arriba > abajo){
    alert("arriba a abajo " +array +" "+arriba)
}

if(abajo > arriba){
    alert("abajo a arriba " +array +" "+abajo)
}


}