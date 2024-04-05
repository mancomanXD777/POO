function temperatura() {
// Mostrar un mensaje de acuerdo a la temperatura
if (temperatura < 0) {
    console.log("¡Hace mucho frío!");
} else if (temperatura >= 0 && temperatura < 10) {
    console.log("Hace frío");
} else if (temperatura >= 10 && temperatura < 20) {
    console.log("La temperatura es agradable");
} else if (temperatura >= 20 && temperatura < 30) {
    console.log("Hace calor");
} else {
    console.log("¡Hace mucho calor!");
}

}