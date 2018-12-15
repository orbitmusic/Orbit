var playStopButton = document.getElementById("playStopButton");
var isPlaying=false;

var context = new AudioContext();
var musicPlay = new Audio();
musicPlay.crossOrigin="anonymus";

musicPlay.loop=false; 
var source = context.createMediaElementSource(musicPlay);
var gain = context.createGain();
var stereoPanner = context.createStereoPanner();
var delay = context.createDelay(4.0);

var compressor = context.createDynamicsCompressor();

function initiatePlayMusic(){
    console.log(getMusicPath() + " initiateMusic ist gestartet"); 
    musicPlay = new Audio(getMusicPath());

    source = context.createMediaElementSource(musicPlay);   //PART 1
    compressor = context.createDynamicsCompressor();        //PART 2
    filter = context.createBiquadFilter();                  //PART 3 

    source.connect(compressor);
    compressor.connect(context.destination);

    source.connect(filter);
    filter.connect(context.destination);

    gain = context.createGain();
    stereoPanner = context.createStereoPanner();
    delay = context.createDelay(4.0);

    source.connect(gain);
    gain.connect(delay);
    delay.connect(stereoPanner);
    stereoPanner.connect(context.destination);
    
    musicPlay.loop=true; 
    
    console.log(getMusicPath() + " initiateMusic ist abgeschlossen!");   
}
//functions modifications

function regulateThreshold(value){  //THRESHOLD
    if(value<=200 && value>=0){
        var thresholdValue= (value -200);
        console.log("thresholdValue: "+thresholdValue);
        compressor.threshold.value=thresholdValue;
        console.log("tresholdValue: "+compressor.threshold.value+" of Threshold");
    }else{
        console.log("Value Treshold mit: "+value+" zu hoch")
    }
}

function regulateGain(value){       //GAIN
    if(value<=200 && value>=0){
         var gainValue= (value /40);
         console.log("gainValue: "+gainValue);
         gain.gain.value= gainValue;
         console.log("gainValue: "+gain.gain.value+" of Gain");
    }else{
        console.log("Value Gain mit: "+value+" zu hoch")
    }
}

function regulatePanning(value){    //PANNING
    if (value<=200 && value>=0){
        var panValue = (value -100)/100; //Angenommener Höchstwert 200
        console.log("panValue: "+panValue);
        stereoPanner.pan.value=panValue;
        console.log("panValue: "+stereoPanner.pan.value+" of steroPanner");
    } else{
        console.log("Value mit: "+value+" zu hoch")
    }
}

function regulateDelay(value){      //DELAY
    if(value<=200 && value>=0){
         var delayValue= (value /25);
         console.log("delayValue: "+delayValue);
         delay.delayTime.value=delayValue;
         console.log("delayValue: "+delay.delayTime.value+" of Delay");
    }else{
        console.log("Value Delay mit: "+value+" zu hoch")
    }
}

//functions modifications ADDITIONS 2


function regulateRatio(){            //RATIO
    if(value<=200 && value>=0){
        var ratioValue= (value /10);
        console.log("ratioValue: "+ratioValue);
        compressor.ratio.value=ratioValue;
        console.log("ratioValue: "+compressor.ratio.value+" of Ratio");
    }else{
        console.log("Value Ratio mit: "+value+" zu hoch")
    }
}

function regulateKnee(){            //KNEE
    if(value<=200 && value>=0){
        var kneeValue= (value /5);
        console.log("kneeValue: "+kneeValue);
         compressor.knee.value=kneeValue;
        console.log("kneeValue: "+compressor.knee.value+" of Knee");
    }else{
        console.log("Value Knee mit: "+value+" zu hoch")
    }
}

function regulateAttack(){            //ATTACK
    if(value<=200 && value>=0){
        var attackValue= (value /2000);
        console.log("attackValue: "+attackValue);
        compressor.attack.value=attackValue;
        console.log("attackValue: "+compressor.attack.value+" of Attack");
    }else{
        console.log("Value Attack mit: "+value+" zu hoch")
    }
}

function regulateRelease(){            //RELEASE
    if(value<=200 && value>=0){
        var releaseValue= (value /2000);
        console.log("releaseValue: "+releaseValue);
        compressor.release.value=releaseValue;
        console.log("releaseValue: "+compressor.release.value+" of Release");
    }else{
        console.log("Value Release mit: "+value+" zu hoch")
    }
}

//functions modifications ADDITIONS 3

function regulateFrequency(){            //RELEASE
    if(value<=200 && value>=0){
        var frequencyValue= (value /2000);
        console.log("frequencyValue: "+frequencyValue);
        filter.frequency.value=frequencyValue;
        console.log("frequencyValue: "+filter.frequency.value+" of Frequency");
    }else{
        console.log("Value Frequency mit: "+value+" zu hoch")
    }
}

function regulateDetune(){            //DETUNE
    if(value<=200 && value>=0){
        var detuneValue= (value /2000);
        console.log("detuneValue: "+detuneValue);
        filter.detune.value=detuneValue;
        console.log("detuneValue: "+filter.detune.value+" of Detune");
    }else{
        console.log("Value Detune mit: "+value+" zu hoch")
    }
}

function regulateQ(){            //Q
    if(value<=200 && value>=0){
        var qValue= (value /2000);
        console.log("qValue: "+qValue);
        filter.Q.value=qValue;
        console.log("qValue: "+filter.Q.value+" of Q");
    }else{
        console.log("Value Q mit: "+value+" zu hoch")
    }
}




//functions Buttons

playStopButton.addEventListener("click", function(){
      
    if(isPlaying){
        musicPlay.pause();
        playStopButton.innerHTML="Play";
        $('#play').show();
        $('#stop').hide();
        console.log('Musik pausiert');   
    } else {
        getMusicLength();
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