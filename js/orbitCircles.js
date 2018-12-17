var stage;
var circleGroup = new createjs.Container();
var innerCircle;
var center;
var cmdCenter;
var cmdInner;
var cmdInnerFill;
var cmdDashed;
var cmdCircle;

function init() {
	
	stage = new createjs.Stage("main");
	stage.mouseMoveOutside = true;
	stage.enableMouseOver(20);  


	//inner circle
    innerCircle = new createjs.Shape();
    cmdInner = innerCircle.graphics.beginStroke("rgb(196,198,202)").command;
    cmdInnerFill = innerCircle.graphics.beginFill("rgb(3,29,126)").command;
    innerCircle.graphics.drawCircle(0, 0, 50);
    innerCircle.x = 750;
    innerCircle.y = 350;
    circleGroup.addChild(innerCircle);
	
  	//center
	var center = new createjs.Shape();
	cmdCenter = center.graphics.beginFill("rgb(196,198,202)").command;
    center.graphics.drawCircle(0, 0, 5);
    center.x = 750;
    center.y = 350;
    circleGroup.addChild(center);
    
	//dashedCircle 
    dashedCircle = new createjs.Shape();
    cmdDashed = dashedCircle.graphics.beginStroke("rgb(196,198,202)").command
    dashedCircle.graphics.setStrokeDash([10, 10]).drawCircle(0, 0, 150);
    dashedCircle.x = 750;
    dashedCircle.y = 350;
    circleGroup.addChild(dashedCircle);
    
    var circle = new createjs.Shape();
    cmdCircle = circle.graphics.beginStroke("rgb(196,198,202)").command;
    circle.graphics.drawCircle(0, 0, 300);
    circle.x=750;													
    circle.y=350;													 
    circleGroup.addChild(circle);									
       
    stage.addChild(circleGroup);

	createjs.Ticker.setFPS(25);
	createjs.Ticker.addEventListener("tick", function(){
		stage.update();
		tick();
	});
	stage.update();

}


	

