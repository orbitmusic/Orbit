let infos = [];
var Treshold = "The threshold property of the DynamicsCompressorNode interface is a k-rate AudioParam representing the decibel value above which the compression will start taking effect.";
var Gain = "The gain property representing the amount of gain to apply.";	
var Panning ="The pan property representing the amount of panning to apply.";
var Delay ="The delayTime property representing the amount of delay to apply.";
var Ratio ="The ratio property representing the amount of change, in dB.";
var Knee ="The knee property containing a decibel value representing the range above the threshold where the curve smoothly transitions to the compressed portion.";
var Attack ="The attack property representing the amount of time, in seconds, required to reduce the gain by 10 dB. It defines how quickly the signal is adapted when its volume is increased.";	
var Release ="The release property representing the amount of time, in seconds, required to increase the gain by 10 dB. It defines how quick the signal is adapted when its volume is reduced.";
var Frequency ="The frequency property representing the frequency of oscillation in hertz.";
var Detune ="The detune property representing detuning of oscillation in cents";
var Q ="The Q property, a double representing a Q factor, or quality factor";

infos.push(Treshold, Gain, Panning, Delay, Ratio, Knee, Attack, Release, Frequency, Detune, Q);

let infosFunc = [];
var planet = "Ziehe die Maus über den Planeten um mithilfe der Farbe die Stimmung des Songs zu verändern!";
var kometInfo ="Drücke die Leertaste und verändere die Länge des Kometen, um die jeweilige Modifikation anzuwenden!";

infosFunc.push(planet, kometInfo);