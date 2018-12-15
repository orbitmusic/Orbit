var playStopButton = document.getElementById("playStopButton");
var isPlaying=false;

var context = new AudioContext();
var musicPlay = new Audio();
musicPlay.crossOrigin="anonymus";
//Context-Part
var source = context.createMediaElementSource(musicPlay);
var gain = context.createGain();
var stereoPanner = context.createStereoPanner();
var delay = context.createDelay(4.0);
/*
source.connect(gain);
gain.connect(delay);
delay.connect(stereoPanner);
stereoPanner.connect(context.destination);
*/









var firstInitiate=false;

function initiatePlayMusic(){
    console.log(getMusicPath() + " initiateMusic wird gestartet"); 
    musicPlay = new Audio(getMusicPath());

    source = context.createMediaElementSource(musicPlay);
    gain = context.createGain();
    stereoPanner = context.createStereoPanner();
    delay = context.createDelay(4.0);

    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(context.destination);

    
     console.log(getMusicPath() + " initiateMusic ist abgeschlossen!");   
}
/*
function playDroppedMusic(){
music2 = document.getElementById("music");
}
*/

function regulatePegel(value){
    if(value<=200 && value>=0){
        var pegelValue= (value -100)/100;
        console.log("pegelValue: "+pegelValue);
    }else{
        console.log("Value Pegel mit: "+value+" zu hoch")
    }
}

function regulateGain(value){
    if(value<=200 && value>=0){
         var gainValue= (value /40);
         console.log("gainValue: "+gainValue);
         gain.gain.value= gainValue;
         console.log("gainValue: "+gain.gain.value+" of Gain");
    }else{
        console.log("Value Gain mit: "+value+" zu hoch")
    }
}

function regulatePanning(value){
    if (value<=200 && value>=0){
        var panValue = (value -100)/100; //Angenommener Höchstwert 200
        console.log("panValue: "+panValue);
        stereoPanner.pan.value=panValue;
        console.log("panValue: "+stereoPanner.pan.value+" of steroPanner");
    } else{
        console.log("Value mit: "+value+" zu hoch")
    }
}

function regulateDelay(value){
    if(value<=200 && value>=0){
         var delayValue= (value /25);
         console.log("delayValue: "+delayValue);
         delay.delayTime.value=delayValue;
         console.log("delayValue: "+delay.delayTime.value+" of Delay");
    }else{
        console.log("Value Delay mit: "+value+" zu hoch")
    }
}






playStopButton.addEventListener("click", function(){
    if(firstInitiate){
         console.log('Musik wurde bereits geladen');  
    }else {
        //initiatePlayMusic();
         firstInitiate=true;
    }
   
    if(isPlaying){
        musicPlay.pause();
        playStopButton.innerHTML="Play";
        $('#play').show();
        $('#stop').hide();
        console.log('Musik pausiert');   
    } else {
        musicPlay.play();
        playStopButton.innerHTML = "Stop";
        $('#play').hide();
        $('#stop').show();
        console.log('Musik startet');   
        console.log("StereoPanner: "+stereoPanner.pan.value);
    }
    isPlaying=!isPlaying
});

musicPlay.addEventListener("ended", function (e){
   isPlaying=false;
   playStopButton.innerHTML = "Play"; 
});