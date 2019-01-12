temp = 0;
var number = null;
nameOfElement = "";
var spacePressed = false;
var cmdKomet = [];
var body = document.getElementsByTagName("body");
var idArray = ['#threshold', '#gain', '#panning', '#delay', '#ratio', '#knee', '#attack', '#release', '#frequency', '#detune', '#q'];
var nameArray = ['Threshold', 'Gain', 'Panning', 'Delay', 'Ratio', 'Knee', 'Attack', 'Release', 'Frequency', 'Detune', 'Q'];

$( document ).ready(function(event)  {

	changeLabel();
	addNumbers();
	
});

//Eigenschaften der Kometen bei Mouseover anzeigen
function changeLabel(event) {	 
	
	for(var i = 0; i < idArray.length; i++){
		
		$(idArray[i]).mouseover(function() {			
			changeId();		
		});
	}
	
	for(var i = 0; i < idArray.length; i++){
		
		$(idArray[i]).mouseout(function() {
			$('p').remove();
		});
	}
}

//Name aus HTML-Attribut auslesen und einfügen
function changeId() {
	setting = $(event.target).attr('name');
	
	$('.settingsLabel').html('<p>' + setting + '</p>');
		
	if(setting == "Threshold"){
		$('.infos').html('<p>'+ infos[0] + '</p>')
	}else if(setting == "Gain"){
		$('.infos').html('<p>'+ infos[1] + '</p>')
	}else if(setting == "Panning"){
		$('.infos').html('<p>'+ infos[2] + '</p>')
	}else if(setting == "Delay"){
		$('.infos').html('<p>'+ infos[3] + '</p>')
	}else if(setting == "Ratio"){
		$('.infos').html('<p>'+ infos[4] + '</p>')
	}else if(setting == "Knee"){
		$('.infos').html('<p>'+ infos[5] + '</p>')
	}else if(setting == "Attack"){
		$('.infos').html('<p>'+ infos[6] + '</p>')
	}else if(setting == "Release"){
		$('.infos').html('<p>'+ infos[7] + '</p>')
	}else if(setting == "Frequency"){
		$('.infos').html('<p>'+ infos[8] + '</p>')
	}else if(setting == "Detune"){
		$('.infos').html('<p>'+ infos[9] + '</p>')
	}else if(setting == "Q"){
		$('.infos').html('<p>'+ infos[10] + '</p>')
	}
}
 
function addNumbers() {
	
 	for(var i = 0; i < idArray.length; i++){ 
		$(idArray[i]).one('click', function(event) {
			addNumberTo();			
		});
 	}
} 
 
//Kometen Erkennungsnummern zuweisen
function addNumberTo () {
	nameOfElement = $(event.target).attr('name');	
	setNumber();
	addKomet(event);
	 
	function setNumber(){
	
		for(var i = 0; i < nameArray.length; i++){ 
			 
			if(nameOfElement == nameArray[i]){
				number = i;
			}
	 	}
	}
}

//Eigenschaften der Kometen aus Array auslesen und anhand der number filtern
function addKometSettings(){
	if(number != null){
		Komet.forEach(function (m, i) {

			if(i == number){

				for(eigenschaft in m){
							
					if(eigenschaft == "Name"){
								
						line =  m.Line;
						cont = m.Container;
						shape = m.Name;
						color = m.Farbe;
						rote = m.Rotation;
																			
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

	containerArray = [];
	containerArray.push(a);

	var color = new Array();
	var cont = new Array();
	var shape= new Array();
	var name= new Array();
	var line= new Array();
	var rote= new Array();
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
	    	var heightLine;

	    	//Komet verkleinern und vergrößern			 
	    	shape[i].on("pressmove", function(event) {	
	    			    		
	    		return function(){
	    			//Maustaste drücken und Leerzeichen-Taste drücken um den Kometen in der Y/X-Achse zu ändern
	    			if(spacePressed == true){	
	    								
	    				this.offset = {
	    					x: Math.abs(-(cont[i].x - stage.mouseX)),
	    					y: Math.abs(cont[i].y - stage.mouseY)
	    				};	
	    								
	    				scaleTemp = this.offset.y / this.initial.y;
	    				scaleTempX = this.offset.x / this.initial.x;
	    			
	    				//Scale Kalkulation für x-und y-Achse
						//--> Scale-Maximun(y=100)
	    			 	if (scaleTemp < 1.02 && scaleTemp > 0.21  ){	
	    				 	if (this.initial.x > this.initial.y){ 
	    		        		//X-Achse
	    				 		if (scaleTempX < 1.02 && scaleTempX > 0.21){
	    				 			console.log("Scale " + scaleTempX);
	    				 			cont[i].scaleY = this.offset.x / this.initial.x;
	    				 			shape[i].scaleX = scaleTempX; //gleichzeitiges Verkleinern des Kometenkopfes
	    				 		}	
	    				 	}else if (this.initial.x < this.initial.y){	    				 		
	    		        		//Y-Achse
	    		    			cont[i].scaleY = this.offset.y / this.initial.y;
	    		    			shape[i].scaleX = scaleTemp; //gleichzeitiges Verkleinern des Kometenkopfes	
	    				 	} 	    		    		
	    			 	}
	    			
	    				console.log("scale" + scaleTemp);
	    			
						//Kalkulieren der einzelnen Kometen
	    				var thresholdValue = getThresholdValue().toFixed(3);
	    				var gainValue = getGainValue().toFixed(3);
	    				var panValue = getPanningValue().toFixed(3);
	    				var delayValue = getDelayValue().toFixed(3);
	    				var ratioValue = getRatioValue().toFixed(3);
	    				var kneeValue = getKneeValue().toFixed(3);
	    				var attackValue = getAttackValue().toFixed(3);
	    				var relValue = getReleaseValue().toFixed(3);
	    				var frequValue = getFrequencyValue().toFixed(3);;
	    				var detuneValue = getDetuneValue().toFixed(3);
	    				var qValue = getQValue().toFixed(3);
	    				
	    				//Wereänderung bei Veränderung der Länge der Kometenlinie
	    				if(name[i] == "Threshold"){
    					
    						var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp; 
    						regulateThreshold(heightLine);
    						$('#infoValue').text(thresholdValue + " dB");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    						console.log(heightLine+"Liniengröße und zahl: "+name[i]);
 						    					 
    				 	}else if(name[i] == "Gain"){
    					
    						var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp; 
    						regulateGain(heightLine);
    						$('#infoValue').text(gainValue + " dB");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    						console.log(heightLine+"Liniengröße und zahl: "+name[i]);
 						
    				 	}else if(name[i] == "Panning"){

    						var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
 							regulatePanning(heightLine);
 							$('#infoValue').text(panValue + " LR");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
 							console.log(heightLine+"Liniengröße und zahl: "+name[i]);
 						    					
    				 	}else if(name[i] == "Delay"){
    					
							var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
    						regulateDelay(heightLine);
    						$('#infoValue').text(delayValue + " sec");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    						console.log(heightLine+"Liniengröße und zahl: "+name[i]);
 						   					
    				 	}else if(name[i] == "Ratio"){

							var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateRatio(heightLine);
							$('#infoValue').text(ratioValue + " dB");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);

    				 	}else if(name[i] == "Knee"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateKnee(heightLine);
							$('#infoValue').text(kneeValue + " dB");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);

    				 	}else if(name[i] == "Attack"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateAttack(heightLine);
							$('#infoValue').text(attackValue + " degree");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);

    				 	}else if(name[i] == "Release"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateRelease(heightLine);
							$('#infoValue').text(relValue + " dB");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);

    				 	}else if(name[i] == "Frequency"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateFrequency(heightLine);
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);
    				 		$('#infoValue').text(frequValue + " Hz");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		
    				 	}else if(name[i] == "Detune"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
							regulateDetune(heightLine);
							$('#infoValue').text(detuneValue + " cents");  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);

    				 	}else if(name[i] == "Q"){

    				 		var point = cont[i].getBounds().height;
 							heightLine = point * scaleTemp;
 							$('#infoValue').text(detuneValue);  
    						$('#infoText').text(name[i]);		    			
    			    		$('#infoText').show();
 							regulateQ(heightLine);
    				 		console.log(heightLine+"Liniengröße und zahl: "+name[i]);
    				 	
    				 	}	
	    			 	stage.update();	    			
	    			}	
	    		}	    		 
	    	}(i));
	    		    	
	    	//Info bei Mouseover anzeigen
		    shape[i].addEventListener('mouseover', (function(event) {
		    		
		    	return function(event){
		    		$('#infoText').text(name[i]);		    			
		    		$('#infoText').show();
		    		$('.infos').html('<p>'+ infosFunc[1] + '</p>');
		    		
		    	}
		    }(i)));
		    
		    //Info bei Mouseout ausblenden 
		    shape[i].addEventListener('mouseout', (function(event) {
		    	return function(){
		    		$('#infoText').hide();
		    		$('.infos').html('');	
		    		$('#infoValue').text('');
		    	}		    		
		    }(i))); 	
		
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
	  