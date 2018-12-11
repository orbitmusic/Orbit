var r = 0;
var g = 0;
var b = 255;
var backgrnd;
var pegelKomet;
var colorKometen = [];
var clickTemp = 0;

$( document ).ready(function(event)  {	
	
	changeColorBgrd();
	
});
function getMousePosition() {
	
		
		this.initial = {
		         x: Math.abs(-(innerCircle.x - stage.mouseX)),
		         y: Math.abs(innerCircle.y - stage.mouseY)
		       };
		
		tempX = this.initial.x;
		tempY = this.initial.y;
		
	}

function setColorBgrd (){
	
	$('body').css("background-color", "rgb(" + r + "," + g + "," + b +")");	
	cmdInnerFill.style = "rgb(" + r + "," + r + "," + g +")";
}

//function setColorLines (){
//$('h3').css("color", "rgb(" + b + "," + g + "," + r +")" );
//$('nav').css("border-color", "rgb(" + b + "," + g + "," + r +")" );
//$('.settingsLabel').css("color", "rgb(" + b + "," + g + "," + r +")" );
//cmdCenter.style = "rgb(" + b + "," + g + "," + r +")";
//cmdInner.style = "rgb(" + b + "," + g + "," + r +")";
//cmdInnerFill.style = "rgb(" + b + "," + g + "," + r +")";
//cmdDashed.style = "rgb(" + b + "," + g + "," + r +")";
//cmdCircle.style = "rgb(" + b + "," + g + "," + r +")";
//}
//Veränderung der Farbe der Kometen --> wird momentan nicht aufgerufen
function getColorKomet (){
r +=50;

		$('#pegel').css("background-color" , "rgb(" + g + "," + g + "," + r +")" );
			pegelKomet = $('#pegel').css("background-color");
		$('#gain').css("background-color", "rgb(" + b + "," + r + "," + g +")" );
			gainKomet = $('#gain').css("background-color");
		$('#panning').css("background-color", "rgb(" + g + "," + b + "," + b +")" );
			panningKomet = $('#panning').css("background-color");
		$('#delay').css("background-color", "rgb(" + r + "," + r + "," + b +")" );
			delayKomet = $('#delay').css("background-color");

colorKometen.push(pegelKomet, gainKomet, panningKomet, delayKomet );

return pegelKomet, gainKomet, panningKomet, delayKomet;

}
function updateColors(){
	
}
//vielleicht doch Pressmove?
function changeColorBgrd(){	
	innerCircle.on("mousedown", function (event) {
	//clickTemp = 1;
	getMousePosition();
	calculateRGB();
	setColorBgrd ();
//	getColorKomet();
//	console.log(r, g, b);
	
	//
	});
}
 function calculateRGB(){
	 r = 255 / 50 + 2 * tempX;
	 g = 255 / 50 +  2 * tempY;
	 b = 255 / tempY;
	 
//	 console.log(r, g, b);
 }


