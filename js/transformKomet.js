$( window ).on( "load", function() {
		mousePosition();
		rotateKomet();
		scaleYKomet();
});

//Komet um den Mittelpunkt rotieren lassen
function rotateKomet() {
	circleLine.on("pressmove", function(evt) {
	rads = Math.atan2(stage.mouseY - lineGroup.y, stage.mouseX - lineGroup.x); 
    var angle = rads * (180 / Math.PI);
    lineGroup.rotation = angle + 90;
	});
	stage.update();
}
////Leerzeichen-Taste
//function space(){
//	 
//}

//Mausposition ermitteln
function mousePosition() {
	circleLine.on("mousedown", function (evt) {
  	 this.initial = {
               x: Math.abs(-(lineGroup.x - evt.stageX)),
               y: Math.abs(lineGroup.y - evt.stageY)
           };
	});
}
//Komt in der Y-Achse verkleinern und vergrößern
function scaleYKomet() {
var spacePressed = false;
	
	$(window).keydown(function(evt) {
	  if (evt.which == 32) { // Space
		  spacePressed = true;
	  }
	}).keyup(function(evt) {
	  if (evt.which == 32) { // Space
		  spacePressed = false;
	  }
});

circleLine.on("pressmove", function(evt) {	
	//Maustaste drücken und Leerzeichen-Taste drücken um den Kometen in der Y-Achse zu ändern
	if(spacePressed == true){	
		console.log("yes!");
		this.offset = {
                x: Math.abs(-(lineGroup.x - evt.stageX)),
                y: Math.abs(lineGroup.y - evt.stageY)
            };		
		scaleTemp = this.offset.y / this.initial.y;
		
	//	--> der Komet kann nur von der Mitte  bis zur Höhe des dashedCircle verändert werden
	     if (scaleTemp < 1.02 ){	     
		 lineGroup.scaleY = scaleTemp;
	     }
		 stage.update();
	     }
	});
	stage.update();
	
}
