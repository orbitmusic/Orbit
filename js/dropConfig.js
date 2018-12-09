
function dropHandler(ev){
	console.log('File(s) dropped');

    ev.preventDefault();    //File wird nicht automatisch durch den Browser geöffnet
    
    if(ev.dataTransfer.items){
        for (var i=0; i<ev.dataTransfer.items.length;i ++){   //Nutzung bei mehreren gedroppten Files
            if(ev.dataTransfer.items[i].kind ==='file'){  
                var file= ev.dataTransfer.items[i].getAsFile(); //Returns file object if dragged item is a file
                console.log('...file[' +i+ '].name= '+file.name);

            }
        }
    } else{
        for (var i=0; i<ev.dataTransfer.files.length; i++){
            console.log('...file[' +i+ '].name = ' +ev.dataTransfer.files[i].name);
        }
    }
    removeDragData(ev)    //Calls function()
}

function dragOverHandler(ev) {	
  console.log('File(s) in drop zone');   //File wird nicht automatisch durch den Browser geöffnet
 
  ev.preventDefault();
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

function musicDroppedTrue(){  //Unglücklich mit "Einfacher" Lösung :/
    
	var greenCircle = new createjs.Shape();
    greenCircle.graphics.beginStroke("#40FF00").drawCircle(0, 0, 300);
    greenCircle.x=750;					
    greenCircle.y=350;					
    circleGroup.addChild(greenCircle);
    stage.update();

}

