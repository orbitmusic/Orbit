temp = 0;
var number;
nameOfElement = "";
var spacePressed = false;
var cmdKomet = [];
var body = document.getElementsByTagName("body");
$( document ).ready(function(event)  {

	changeLabel();
	addNumbers();
	
});

//Eigenschaften der Kometen bei Mouseover anzeigen
function changeLabel(event) {	 
	$('#pegel').mouseover(function() {			
		changeId();		
	});

	$('#gain').mouseover(function() {		
		changeId();});
	
	$('#panning').mouseover(function() {		
		changeId();	});
	
	$('#delay').mouseover(function() {		
		changeId();});
	
	$('#pegel').mouseout(function() {
		$('p').remove();});
	
	$('#gain').mouseout(function() {
		$('p').remove();});	
	
	$('#panning').mouseout(function() {
		$('p').remove();});	
	
	$('#delay').mouseout(function() {
		$('p').remove();});	
}

//Name aus HTML-Attribut auslesen und einfügen
 function changeId() {
	 setting = $(event.target).attr('name');
	
		$('.settingsLabel').html('<p>' + setting + '</p>');	
 }
 
//
 function addNumbers() {
	 
	 $('#pegel').one('click', function(event) {
		 addNumberTo();
		
		
 });
	 $('#gain').one('click', function(event) {
		 addNumberTo();
		 
 });
	 $('#panning').one('click', function(event) {
		 addNumberTo();
		
 });
	 $('#delay').one('click', function(event) {
		 addNumberTo();
		 
 }); 
	
 }  
//Kometen Erkennungsnummern zuweisen
function addNumberTo () {
	nameOfElement = $(event.target).attr('name');	
	 setNumber();
	 addKomet(event);
	 
	 function setNumber(){
		 
		 if(nameOfElement == "Pegel"){
			 number = 0;
			
		 }
		 else if(nameOfElement == "Gain"){
			 number = 1;
			 
		 }
		 else if(nameOfElement == "Panning"){
			 number = 2;
			
		 }
		 else if(nameOfElement == "Delay"){
			 number = 3;
			 
		 }
		 else{
			 number = null;
		 }
		
	 
  }

}
//Eigenschaften der Kometen aus Array auslesen und anhand der number filtern
function addKometSettings(){
			 if(number != null){
				Komet.forEach(function (m, i) {
//					//console.log(m[i]);
					if(i == number){
						for(eigenschaft in m){
							
							if(eigenschaft == "Name"){
								
							line =  m.Line;
							cont = m.Container;
							shape = m.Name;
							color = m.Farbe;
							rote = m.Rotation;
//							drawSymbol = m.Symbol; //eventuell noch zum ändern der Symbole
							
							shapesOfArray = [];	
							shapesOfArray.push(line, cont, shape, color, rote);
							
							
							}
							
							
						
						}
					} 
				
				 });
			 }	 
			
				}

var rads;
var angle;
var containerArray = [];
var shapesOfArray = [];
var coloredAddedKomet = [];
 function addKomet(event){
	 
	 //Werte aus Komet-Array auslesen
	 addKometSettings();
	 //jeweils 5 Werte in ein neues array packen
	 let a = shapesOfArray.slice(0, 5);
//	 let b = shapesOfArray.slice(5, 10);
//	 let c = shapesOfArray.slice(10, 15);
//	 let d = shapesOfArray.slice(15, 20);
	 
//	 console.log(a);
//	 console.log(b);
//	 console.log(c);
//	 console.log(d);

	 containerArray = [];
	 containerArray.push(a);

	 var color = new Array();

	 var cont = new Array();
	 var shape= new Array();
	 var name= new Array();
	 var line= new Array();
	 var rote= new Array();

	 
	 for(let i = 0; i < containerArray.length; i ++){ 
		
		for(let k = 0; k < 1; k ++){ 
			line[i] = containerArray[i][0];
			cont[i] = containerArray[i][1];
			shape[i] = containerArray[i][2];
			name[i] = containerArray[i][2];
			color[i] = containerArray[i][3];
			rote[i] = containerArray[i][4];
			
			//Objekte erstellen
			shape[i]= new createjs.Shape();
			line[i] = new createjs.Shape();
			cont[i] = new createjs.Container(); 
				
			
			//Container
			cont[i].x = 750;
			cont[i].y = 350;
			cont[i].regX = 750;
			cont[i].regY = 350;
	    			  
	    	//Line		   
			line[i].graphics.beginStroke("#ffffff").moveTo(750, 350).lineTo(750, 100);
			line[i].regX = 0;
			line[i].regY = 0;
			line[i].setBounds(0, 0, 1, 150);
	    		
	    	stage.update(); 
	    	//Circle	
	    	cmdKomet[i] = shape[i].graphics.beginFill(color[i]).command;
	    	shape[i].graphics.drawCircle(0, 0, 15);
	    	shape[i].x = 750;
	    	shape[i].y = 100;
	    	shape[i].setBounds(0, 100, 15, 15);
	    	
	    	//Festlegen eines Winkels --> hinzugefügte Kometen sollen nicht aufeinanderliegen
	    	cont[i].rotation = rote[i];
	    	cont[i].addChild(line[i]);
	    	cont[i].addChild(shape[i]);
	    			  
	    	stage.addChild(cont[i]);	
	    	stage.update();
	    				
	    	//Events in Closures
	    	
	    	
	    	
	    	//Komet um den Mittelpunkt rotieren
	    	shape[i].addEventListener('pressmove', (function(temp) {
	    						 
	    		 return function(){
	    					           
	    			rads = Math.atan2(stage.mouseY - cont[i].y, stage.mouseX - cont[i].x); 
	    			angle = rads * (180 / Math.PI);
	    			cont[i].rotation = angle + 90;
	    		    console.log(cont[i].x, cont[i].y);
	    		    console.log(line[i].regX, line[i].regY);
	    		    console.log(cont[i].getTransformedBounds().height+"Höhe");
	    		    console.log(cont[i].getTransformedBounds().width+"Breite");
	    					       }
	    	  }(i)));

	    	//Mausposition ermitteln				 
	    	shape[i].on("mousedown", function (event) {
	    		
	    		
	    		return function(){
	    					 			
	    			this.initial = {
	    					         x: Math.abs(-(cont[i].x - stage.mouseX)),
	    					         y: Math.abs(cont[i].y - stage.mouseY)
	    					       };
	    					   	 			
	    					}
	    	}(i));
	    	
	    	//Leerzeichen drücken
	    	spaceDef();
	    	
	    	//Komet verkleinern und vergrößern			 
	    	 shape[i].on("pressmove", function(event) {	
	    		 
	    		 return function(){
	    		//Maustaste drücken und Leerzeichen-Taste drücken um den Kometen in der Y-Achse zu ändern
	    			if(spacePressed == true){	
	    								
	    			this.offset = {
	    						    x: Math.abs(-(cont[i].x - stage.mouseX)),
	    						    y: Math.abs(cont[i].y - stage.mouseY)
	    						   };	
	    								
	    				
	    			scaleTemp = this.offset.y / this.initial.y;


					//TEST Zeiger-Länge
						var point = cont[i].getBounds().height;
						heightLine = point * scaleTemp;
						console.log(heightLine+"Liniengröße");
					//TEST



	    								
	    		//	--> Scale-Maximun(y=100)
	    				 if (scaleTemp < 1.02 ){	     
	    				       cont[i].scaleY = scaleTemp;
	    					  }
	    			 stage.update();
	    				  }
	    						 }
	    	 }(i));
	    	
	    	// updateColor(i);
	    	//Info bei Mouseover anzeigen
		    	shape[i].addEventListener('mouseover', (function(event) {
		    		
		    		return function(event){
		    			
		    			// var left = Math.abs(-(shape[i].x - stage.mouseX) );
		    		    // var top = Math.abs(shape[i].y - stage.mouseY);
		    		     $('#infoText').
//		    		     css({
//		    		    	 top: top + 110 ,
//		    		    	 left: left + 750})
		    		    	 show();
		    		     $('#infoText').text(name[i]);
		    		   //   console.log (left, top);
		    			
		    		}
		    		  }(i)));
		    	//Info bei Mouseout ausblenden 
		    	shape[i].addEventListener('mouseout', (function(event) {
		    		return function(){
		    			$('#infoText').hide();
		    				console.log(name[i]);
		    		}
		    		  }(i))); 	
	    	 
	 //Hinzugefügten Kometen aktuelle Farbe zuweisen   		 
	   
		
	    							stage.update();
	    				
	}	
	    				
 }
	
	 

 }
 function spaceDef() {
 
	
	$(window).keydown(function(evt) {
	  if (evt.which == 32) { // Space
		  spacePressed = true;
	  }
	}).keyup(function(evt) {
	  if (evt.which == 32) { // Space
		  spacePressed = false;
	  }
});
 }
 //Farbe der Kometen ändern --> Fehler bei der Aktualisierung
// function updateColor(i){ 	
//	 
//	   	if(clickTemp == 1){	
//	   		
//	   		addColor(i);
//	   	}
//	   
// }
//
// function addColor(i){
//
//	 if(number == 0){
//		 cmdKomet[i].style = "" + colorKometen[0] + "";
//		 
//	 }
//	 if(number == 1){
//		 cmdKomet[i].style = "" + colorKometen[1] + "";
//		 
//	 }
//	 if(number == 2){
//		 cmdKomet[i].style = "" + colorKometen[2] + "";
//		
//	 }
//	 if(number == 3){
//		 cmdKomet[i].style = "" + colorKometen[3] + "";
//		
//	 }
//	 
//	 stage.update();
//	
// }