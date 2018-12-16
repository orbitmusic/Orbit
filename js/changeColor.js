var r = 0;
var g = 0;
var b = 0;
var o = 0;
var l = 0;
var u = 0;
var backgrnd;
var pegelKomet;
var colorKometen = [];
//var clickTemp = 0;

$( document ).ready(function(event)  {	
	
	changeColorBgrd();
	changeMouseCursor();
	
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
	
	if(b < 155){
		$('body').css("background-color", "rgb(" + r + "," + g + "," + b +")");	
	}
	if(b > 155){
		b = 100;
		$('body').css("background-color", "rgb(" + r + "," + g + "," + b +")");	
	}
}

function setColorInnerCircle(){
	if(l < 155){
		cmdInnerFill.style = "rgb(" + l + "," + o + "," + u +")";
	}
	if(l > 155){
		l = 100;
		$('body').css("background-color", "rgb(" + r + "," + g + "," + b +")");	
	}
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
	innerCircle.on("pressmove", function (event) {
	//clickTemp = 1;
	getMousePosition();
	calculateRGB();
	setColorBgrd ();
	setColorInnerCircle();
//	getColorKomet();
//	console.log(r, g, b);
	console.log(o, l);
	
	//
	});
}
function changeMouseCursor(){
	innerCircle.on("mouseover", function (event) {
		$('html,body').css('cursor','crosshair');
	});
	innerCircle.on("mouseout", function (event) {
		$('html,body').css('cursor','context-menu');
	});
	
}
 function calculateRGB(){
	 if(tempX < 38 || tempY < 38){
	 r = 255 / 50 + 2 * tempX;
	 g = 255 / 50 +  2 * tempY;
	 b = 255 / tempY;
	 
	 	
	 o = r;
	 l = b;
	 console.log("Von changeColor-> X: "+tempX+" Y: "+ tempY);
	 console.log("R: "+getR()+", G: "+getG()+", B: "+ getB());
	 }
	 if(tempX > 38 || tempY > 38){
		 setOrginialBgrd();
		 optionsSettingStandart();
	 }
	//Choose Mood
	if(tempX < 9 || tempY < 9){
		optionsSetting1();
	}else if((tempX < 19 || tempY < 19) && (tempX > 9 || tempY > 9)){
		optionsSetting2();
	}else if((tempX < 28 || tempY < 28) && (tempX > 19 || tempY > 19)){
		optionsSetting3();
	}else if((tempX < 38 || tempY < 38) && (tempX > 28 || tempY > 28)){
		optionsSetting4();
	}




 }

 function setOrginialBgrd() {
//		$('body').css("background-color", "rgb(2, 10, 40)");	
//		cmdInnerFill.style = "rgb(3,29,126))";
	 	r = 2;
	 	g = 10;
	 	b = 40;
	 	
	 	l = 3;
	 	o = 29;
	 	u = 126;
		
	}

//Nicht länger benötigt
/*
function getR(){
	return r;
}
function getG(){
	return g;
}
function getB(){
	return b;
}
function getO(){
	return o;
}
function getL(){
	return l;
}
function getU(){
	return u;
}
*/