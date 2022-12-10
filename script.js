var play_video = document.getElementById('played_video')
var close_btn = document.getElementById('close_btn')
function demarrage(file){
    close_btn.src = file
    play_video.style.display = "block"
}
function fermeture(){
    play_video.style.display="none"
}