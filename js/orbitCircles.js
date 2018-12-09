var stage;
var circleGroup = new createjs.Container();

function init() {
	stage = new createjs.Stage("main");
	stage.mouseMoveOutside = true;
	
//center
	var center = new createjs.Shape();
    center.graphics.beginFill("#c4c6ca").drawCircle(0, 0, 5);
    center.x = 750;
    center.y = 350;
    circleGroup.addChild(center);

//inner circle
    var innerCircle = new createjs.Shape();
    innerCircle.graphics.beginStroke("#c4c6ca").drawCircle(0, 0, 50);
    innerCircle.x = 750;
    innerCircle.y = 350;
    circleGroup.addChild(innerCircle);
	
//dashedCircle 
    dashedCircle = new createjs.Shape();
    dashedCircle.graphics.beginStroke("#c4c6ca").setStrokeDash([10, 10]).drawCircle(0, 0, 150);
    dashedCircle.x = 750;
    dashedCircle.y = 350;
    circleGroup.addChild(dashedCircle);
    
    var circle = new createjs.Shape();
    circle.graphics.beginStroke("#c4c6ca").drawCircle(0, 0, 300);	//Tobi 0912
    circle.x=750;													//Tobi 0912		Bisher nicht als circle hinzugefügt
    circle.y=350;													//Tobi 0912
   
    circleGroup.addChild(circle);									//Tobi 0912

   // dashedCircle.x = 750;											//Tobi 0912 Doppelt?
   // dashedCircle.y = 350;											//Tobi 0912
   // circleGroup.addChild(dashedCircle);							//Tobi 0912
    
    stage.addChild(circleGroup);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", function(){
		stage.update();
	});
	stage.update();
}
