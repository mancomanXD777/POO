console.log("page loaded...");

function play(video){
    video.play();   //pone el video en play

}
function stop(video){
    video.pause();  //pausa video
    video.currentime = 0; //vuelve video al inicio
}
function cambiarVideo(nuevaFuente) {
    var video = document.querySelector('.col-l video'); // Selecciona el video en la columna izquierda
    video.src = nuevaFuente; // Cambia la fuente del video
    video.load(); // Carga el nuevo video
    video.play(); // Reproduce el nuevo video
}