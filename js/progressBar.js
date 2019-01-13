var progress = new createjs.Shape();
var angleSim = 0;


function progressSim() {
	progress.setMyAngle = 0.1;
	progress.x = 750;
	progress.y = 350;
	
	circleGroup.addChild(progress);
	stage.update();							   	
}

function tick() {
	progress.setMyAngle += 0.1;
	progress.graphics.clear();
	progress.graphics.setStrokeStyle(10).beginStroke("#40FF00").arc(0, 0, 300, 0, Math.PI * progress.setMyAngle, false);
	stage.update();
}