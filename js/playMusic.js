var playStopButton = document.getElementById("playStopButton");
var isPlaying=false;

//Audio API Content
var context = new AudioContext();
var musicPlay = new Audio();
musicPlay.crossOrigin="anonymus";
musicPlay.loop=false; 
var source = context.createMediaElementSource(musicPlay);
var gain = context.createGain();
var stereoPanner = context.createStereoPanner();
var delay = context.createDelay(4.0);
var compressor = context.createDynamicsCompressor();
var filter = context.createBiquadFilter();

//Color Moods Variables
var safeValue1 =0;
var safeValue2 =0;
var safeValue3 =0;
var option1=false;
var option2=false;
var option3=false;
var option4=false;

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

//functions modifications PART 1

function regulateGain(value){       //GAIN
    if(value<=250 && value>=50){
         var gainValue= ((value-50) /20);           //+1db je 20er Schritt
         gain.gain.value= gainValue;
         console.log("gainValue: "+gain.gain.value+" of Gain");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateGain");
    }
}

function regulatePanning(value){    //PANNING
    if (value<=250 && value>=50){
        var panValue = ((value-50) -100)/100;       //Ergebnisreichweite von -1 (links) bis zu +1 (rechts)
        stereoPanner.pan.value=panValue;
        console.log("panValue: "+stereoPanner.pan.value+" of steroPanner");
    } else{
        console.log("Falsche Werte bei Ausführung von regulatePanning");
    }
}

function regulateDelay(value){      //DELAY
    if(value<=250 && value>=50){
         var delayValue= ((value-50) /50);          //+1 Sekunde Delay je 50er Schritt
         delay.delayTime.value=delayValue;
         console.log("delayValue: "+delay.delayTime.value+" of Delay");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateDelay");
    }
}

//functions modifications PART 2

function regulateThreshold(value){  //THRESHOLD
    if(value<=250 && value>=50){
        var thresholdValue= (((value-50)/2)-100);   //-1db je 1er Schritt, 0 bis -100db
        compressor.threshold.value=thresholdValue;
        console.log("tresholdValue: "+compressor.threshold.value+" of Threshold");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateThreshold");
    }
}

function regulateRatio(value){      //RATIO
    if(value<=250 && value>=50){
        var ratioValue= ((value-50) /10);           //Von 0 bis +20dB 
        compressor.ratio.value=ratioValue;
        console.log("ratioValue: "+compressor.ratio.value+" of Ratio");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateRatio");
    }
}

function regulateKnee(value){       //KNEE
    if(value<=250 && value>=50){
        var kneeValue= ((value-50) /5);             //Von 0 bis 40 Grad
        compressor.knee.value=kneeValue;
        console.log("kneeValue: "+compressor.knee.value+" of Knee");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateKnee");
    }
}

function regulateAttack(value){     //ATTACK
    if(value<=250 && value>=50){
        var attackValue= (((value-50)*5) /1000);    //In 0.5er Schritten von 0 bis 1dB
        compressor.attack.value=attackValue;
        console.log("attackValue: "+compressor.attack.value+" of Attack");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateAttack");
    }
}

function regulateRelease(value){    //RELEASE
    if(value<=250 && value>=50){
        var releaseValue= (((value-50)*5) /1000);    //In 0.5er Schritten von 0 bis 1dB
        compressor.release.value=releaseValue;
        console.log("releaseValue: "+compressor.release.value+" of Release");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateRelease");
    }
}

//functions modifications PART 3

function regulateFrequency(value){  //FREQUENCY
    if(value<=250 && value>=50){
        var frequencyValue= (((value-50)*100 ));    //Werte von 0 bis 20k in 100er Schritten
        filter.frequency.value=frequencyValue;
        console.log("frequencyValue: "+filter.frequency.value+" of Frequency");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateFrequency");
    }
}

function regulateDetune(value){     //DETUNE
    if(value<=250 && value>=50){
        var detuneValue= ((value-50) /2);           //Werte von 0 bis 100 in 1er Schritten 
        filter.detune.value=detuneValue;
        console.log("detuneValue: "+filter.detune.value+" of Detune");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateDetune");
    }
}

function regulateQ(value){          //Q
    if(value<=250 && value>=50){
        var qValue= ((value-50) /2);                //Werte von 0 bis 100 in 1er Schritten 
        filter.Q.value=qValue;
        console.log("qValue: "+filter.Q.value+" of Q");
    }else{
        console.log("Falsche Werte bei Ausführung von regulateQ");
    }
}

//Modifications Getter

function getThresholdValue(){
    return compressor.threshold.value;
}
function getGainValue(){
    return gain.gain.value;
}
function getPanningValue(){
    return stereoPanner.pan.value;
}
function getDelayValue(){
    return delay.delayTime.value;
}
function getRatioValue(){
    return compressor.ratio.value;
}
function getKneeValue(){
    return compressor.knee.value;
}
function getAttackValue(){
    return compressor.attack.value;
}
function getReleaseValue(){
    return compressor.release.value;
}
function getFrequencyValue(){
    return filter.frequency.value;
}
function getDetuneValue(){
    return filter.detune.value;
}
function getQValue(){
    return filter.Q.value;
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

//Color Moods
//Bei bereits vorhanden Zeigern werden die dazugehörigen Längen nicht geändert, aber der zugeordnete Wert schon
function optionsSetting1(){
    
    if(!option1){
        if(option2){
            gain.gain.value=safeValue1;
            stereoPanner.pan.value=safeValue2;
            filter.frequency.value=safeValue3;
            option2=false;
        }else if(option3){
            compressor.ratio.value=safeValue1;
            stereoPanner.pan.value=safeValue2;
            compressor.release.value=safeValue3;
            option3=false;
        }else if(option4){
            compressor.knee.value=safeValue1;
            filter.detune.value=safeValue2;
            filter.Q.value=safeValue3;
            option4=false;
        }
       
        safeValue1=gain.gain.value;
        safeValue2=stereoPanner.pan.value;
        safeValue3=filter.frequency.value;
        
        regulateGain(250);
        regulatePanning(250);
        regulateFrequency(250);
        
        console.log("Colour set on Option 1!")
        option1=true;
    }
    
}
function optionsSetting2(){

    if(option1){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option1=false;
    }else if(option3){
        compressor.ratio.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        compressor.release.value=safeValue3;
        option3=false;
    }else if(option4){
        compressor.knee.value=safeValue1;
        filter.detune.value=safeValue2;
        filter.Q.value=safeValue3;
        option4=false;
    }

    if(!option2){
        safeValue1=gain.gain.value;
        safeValue2=stereoPanner.pan.value;
        safeValue3=filter.frequency.value;
        
        regulateGain(250);
        regulatePanning(150);
        regulateFrequency(51);

        console.log("Colour set on Option 2!")
        option2=true;
    }
}
function optionsSetting3(){

    if(option1){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option1=false;
    }else if(option2){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option2=false;
    }else if(option4){
        compressor.knee.value=safeValue1;
        filter.detune.value=safeValue2;
        filter.Q.value=safeValue3;
        option4=false;
    }

    if(!option3){
        safeValue1=compressor.ratio.value;
        safeValue2=stereoPanner.pan.value;
        safeValue3=compressor.release.value;
        
        regulateRatio(50);
        regulatePanning(150);
        regulateRelease(250);

        console.log("Colour set on Option 3!")
        option3=true;
    }
}
function optionsSetting4(){

    if(option1){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option1=false;
    }else if(option2){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option2=false;
    }else if(option3){
        compressor.ratio.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        compressor.release.value=safeValue3;
        option3=false;
    }

    if(!option4){
        safeValue1=compressor.knee.value;
        safeValue2=filter.detune.value;
        safeValue3=filter.Q.value;
        
        regulateKnee(50);
        regulateDetune(250);
        regulateQ(150);

        console.log("Colour set on Option 4!")
        option4=true;
    }
}
function optionsSettingStandart(){
    
    if(option1){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option1=false;
    }else if(option2){
        gain.gain.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        filter.frequency.value=safeValue3;
        option2=false;
    }else if(option3){
        compressor.ratio.value=safeValue1;
        stereoPanner.pan.value=safeValue2;
        compressor.release.value=safeValue3;
        option3=false;
    }else if(option4){
        compressor.knee.value=safeValue1;
        filter.detune.value=safeValue2;
        filter.Q.value=safeValue3;
        option4=false;
    }else{
        console.log("Colour set on Standart!")
    }
}
