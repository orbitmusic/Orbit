var music = new Audio();
var fileName = "";

function dropHandler(ev){
	console.log('File(s) wurden gedroppt');	
    ev.preventDefault();    //File wird nicht automatisch durch den Browser geöffnet
    
    if(ev.dataTransfer.items){
        for (var i=0; i<ev.dataTransfer.items.length;i ++){   	//Nutzung bei mehreren gedroppten Files
            if(ev.dataTransfer.items[i].kind ==='file'){  		//Sofern gedroppte Daten vom Type File sind
                var file= ev.dataTransfer.items[i].getAsFile(); //Erstellt File Objekt, wenn If.Bedingung zutreffend
                console.log('...file[' +i+ '].name= '+file.name);

				addMusic(file);
				setSongtitel(fileName);
				console.log("Successfull run addMusic()");
            }
        }
    } else{
        for (var i=0; i<ev.dataTransfer.files.length; i++){
            console.log('...file[' +i+ '].name = ' +ev.dataTransfer.files[i].name);
        }
    }

    removeDragData(ev)    //Ruft function() auf
}

function dragOverHandler(ev) {	
  console.log('File(s) oberhalb der Drop-Zone');   
  ev.preventDefault(); 	 //File wird nicht automatisch durch den Browser geöffnet
}

function removeDragData(ev) {
  console.log('Removing drag data');

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
    musicDroppedTrue(); //TEST   
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
    musicDroppedTrue(); //TEST  
  }
}

function musicDroppedTrue(){  //Visuelle Bestätigung für Datei-Drop -> Grüner Ring
	
	progressSim();

}

function addMusic(file){
	
	music = new Audio(file.name);	//Funktioniert nur, weil das File im Ordner ist -> Überarbeitung erforderlich
	this.fileName = file.name;
	console.log("Successfull added "+getMusicPath()+" file to Audio music");
	initiatePlayMusic();
	
}

function getMusicPath(){

	console.log(fileName + " erfolgreich erkannt, log getMusicPath");
	return fileName;
	
}
function setSongtitel(fileName){

	$('#songTitel').text(fileName);

}

function getMusicLength(){
	
	//Work in Progress
	
}