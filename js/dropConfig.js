//DropConfig.js funktioniert nur, weil das File im Projekt-Ordner ist. Browser lassen keine Path-Anfragen zu.

var music = new Audio();
var fileName = "";
var fileDropped=false;

//Ausführung wenn eine Datei gedroppt wird
function dropHandler(ev){
	console.log('File Drop-Event erfolgreich gestartet.');	
    ev.preventDefault();    										//Verhindert Standart-Interaktion des Browsers mit gedroppten Files
    
    if(ev.dataTransfer.items){
        for (var i=0; i<ev.dataTransfer.items.length;i ++){   		//Nutzung bei mehreren gedroppten Files        
            if(ev.dataTransfer.items[i].kind ==='file'){			//Sofern gedroppte Daten vom Typ File sind
                var file= ev.dataTransfer.items[i].getAsFile(); 	//Erstellt File Objekt                
                console.log('...file[' +i+ '].name= '+file.name+" erfolgreich erkannt.");
				addMusic(file);
				setSongtitel(fileName);
				console.log("addMusic() wurde erfolgreich ausgeführt.");
            }
        }
    } else{
        for (var i=0; i<ev.dataTransfer.files.length; i++){
            console.log('...file[' +i+ '].name = ' +ev.dataTransfer.files[i].name+" ist kein File");
        }
    }
    fileDropped=true;
    removeDragData(ev);    										
}

//Ausführung wenn eine Datei über der Drop-Zone gehalten wird
function dragOverHandler(ev) {	
	console.log('File(s) oberhalb der Drop-Zone');   
  	ev.preventDefault(); 	 										//File wird nicht automatisch durch den Browser geöffnet
}

//Leert "Drag Data Item List"
function removeDragData(ev) {									
	if (ev.dataTransfer.items) {
        ev.dataTransfer.items.clear();
    	  
  	}else {
    	ev.dataTransfer.clearData();
    	  
  	}
  	console.log("Drag Data Item List erfolgreich geleert.");
}

//Initialisert Konfiguration der Audio-Pipeline
function addMusic(file){											
	music = new Audio(file.name);								
	this.fileName = file.name;
	
	initiatePlayMusic();
	console.log(getMusicName()+" wurde erfolgreich initialisiert.");
}

function getMusicName(){
	console.log("getMusicName() gibt fileName "+fileName + " wieder.");
	return fileName;	
}

function setSongtitel(fileName){
	$('#songTitel').text(fileName);
}

