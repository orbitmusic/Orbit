var stage;
var circleGroup = new createjs.Container();
lineGroup = new createjs.Container();
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
    var dashedCircle = new createjs.Shape();
    dashedCircle.graphics.beginStroke("#c4c6ca").setStrokeDash([10, 10]).drawCircle(0, 0, 150);
    dashedCircle.x = 750;
    dashedCircle.y = 350;
    circleGroup.addChild(dashedCircle);
    
    var circle = new createjs.Shape();
    innerCircle.graphics.beginStroke("#c4c6ca").drawCircle(0, 0, 300);

    dashedCircle.x = 750;
    dashedCircle.y = 350;
    circleGroup.addChild(dashedCircle);
    
//LineGroup Container    
    lineGroup.x = 750;
    lineGroup.y = 350;
    lineGroup.regX = 750;
    lineGroup.regY = 350;
//"Komet"    
//Line   
    var line = new createjs.Shape();
    line.graphics.beginStroke("#c4c6ca").moveTo(750, 350).lineTo(750, 200);
    line.regX = 0;
    line.regY = 0;
    line.setBounds(0, 0, 1, 150);
    lineGroup.addChild(line);
    stage.update(); 
//Circle
	circleLine = new createjs.Shape();
	circleLine.graphics.beginFill("#7087de").drawCircle(0, 0, 15);
	circleLine.x = 750;
	circleLine.y = 200;
	circleLine.setBounds(0, 200, 15, 15);
	lineGroup.addChild(line);
    lineGroup.addChild(circleLine);
	stage.addChild(lineGroup);
	stage.addChild(circleGroup);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", function(){
		stage.update();
	});
	stage.update();
}


	

