var progress = new createjs.Shape();
var angleSim = 0;
var length;
//var current_time = musicPlay.currentTime;
//var duration = musicPLay.duration;

function calculateProgress(){
		
		angleSim += (this.currentTime / this.duration) * 100;
		console.log(angleSim);
//		progressSim();
	
}

function progressSim() {
	//diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	progress.setMyAngle = 0.1;
	//progress.graphics.beginStroke("#ffffff").arc(0, 0, 300, -80, angleSim, angleSim*(Math.PI/180), false);
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