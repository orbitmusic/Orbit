var playStopButton = document.getElementById("playStopButton");
var isPlaying=false;

var musicPlay = new Audio();

//var context = new AudioContext();

var firstInitiate=false;

function initiatePlayMusic(){
     console.log(getMusicPath + "Wird aufgespielt_1"); 
    musicPlay = new Audio(getMusicPath());
     console.log(getMusicPath + "Wird aufgespielt_2");   
}

function playDroppedMusic(){
music2 = document.getElementById("music");
}









playStopButton.addEventListener("click", function(){
    if(firstInitiate){
         console.log('Musik wurde bereits geladen');  
    }else {
         initiatePlayMusic();
         firstInitiate=true;
    }
   
    if(isPlaying){
        music.pause();
        playStopButton.innerHTML="Play";
        $('#play').show();
        $('#stop').hide();
        console.log('Musik pausiert');   
    } else {
        music.play();
        playStopButton.innerHTML = "Stop";
        $('#play').hide();
        $('#stop').show();
        console.log('Musik startet');   
    }
    isPlaying=!isPlaying
});