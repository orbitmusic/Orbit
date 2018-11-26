//Datei nur fuer den Test-Gebrauch

var playStopButton = document.getElementById("mainWrap");

var isPlaying = false;



var context = new AudioContext();

var sound = new Audio("sounds/music.wav");

sound.crossOrigin = "anonymous";

var source = context.createMediaElementSource(sound);

var gain = context.createGain();

var stereoPanner = context.createStereoPanner();

var delay = context.createDelay(4.0);



source.connect(gain);

gain.connect(delay);

delay.connect(stereoPanner);

stereoPanner.connect(context.destination);


/*
document.getElementById("gainSlider").addEventListener("input", function (e) {

    var gainValue = (this.value / 20);

    document.getElementById("gainOutput").innerHTML = gainValue + " dB";

    gain.gain.value = gainValue;

});



document.getElementById("panningSlider").addEventListener("input", function (e) {

    var panValue = (this.value - 50) / 50;

    document.getElementById("panningOutput").innerHTML = panValue + " LR";

    stereoPanner.pan.value = panValue;

});



document.getElementById("delaySlider").addEventListener("input", function (e) {

    var delayValue = (this.value / 25);

    document.getElementById("delayOutput").innerHTML = delayValue + " sec";

    delay.delayTime.value = delayValue;

});
*/


playStopButton.addEventListener("click", function (e) {

    if (isPlaying) {

        sound.pause();

        playStopButton.innerHTML = "Play";

    } else {

        sound.play();

        playStopButton.innerHTML = "Stop";

    }



    isPlaying = !isPlaying;

});



sound.addEventListener("ended", function (e) {

    isPlaying = false;

    playStopButton.innerHTML = "Play";

});