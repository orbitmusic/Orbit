//Größe des Main-Containers holen
widthMain = $('#main').width();
heightMain = $('#main').height();
near = 0;
far = 2000;
console.log(widthMain, heightMain);
const DEG_TO_RAD = Math.PI / 180;


//OBJEKTE
function  createCircles() {	
	
			var circleGroup = new THREE.Group();
			 objects = [];
			//Zentrum
			var geometryCenter = new THREE.CircleGeometry( 5, 32 );
			var materialCenter = new THREE.MeshBasicMaterial( { color: 0x666666 } );
			var center = new THREE.Mesh( geometryCenter, materialCenter );
			center.name = "center";
			circleGroup.add( center );
			objects.push(center);
			//Zentrum Ring
			var geometryCenterCircle = new THREE.CircleGeometry( 50, 320 );
			var edges = new THREE.EdgesGeometry(geometryCenterCircle);
			var centerCircle = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x666666 } ) );
			centerCircle.name = "centerCircle";
			circleGroup.add( centerCircle );
			objects.push(centerCircle);
			//innerer Ring, gepunktet
			var geometryDashedCircle = new THREE.CircleGeometry( 150, 320 );
			var edges = new THREE.EdgesGeometry( geometryDashedCircle );
			var dashed = new THREE.LineDashedMaterial( { color: 0x666666, linewidth: 5, scale: 1, dashSize: 5, gapSize: 5, } );
			var dashedCircle = new THREE.LineSegments( edges, dashed);
			dashedCircle.computeLineDistances();
			dashedCircle.name = "dashedCircle";
			circleGroup.add( dashedCircle );
			objects.push(dashedCircle);
			//äußerer Ring
			var geometryCircle = new THREE.CircleGeometry( 250, 320 );
			var edges = new THREE.EdgesGeometry( geometryCircle );
			var circle = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xc666666 } ) );
			circle.name = "circle";
			circleGroup.add( circle );
			objects.push(circle);
	return circleGroup;
}

function createLines(){
			var lineGroup = new THREE.Group();
			//Linie 1
			var geometryLine1 = new THREE.Geometry();
		//	geometry.vertices.push(new THREE.Vector3( -100, 0, 0) );
			geometryLine1.vertices.push(new THREE.Vector3(0, 150, 0) );
			geometryLine1.vertices.push(new THREE.Vector3(0, 0, 0) );
			var materialLine1 = new THREE.LineBasicMaterial( { color: 0xffffff } );
			var line1 = new THREE.Line( geometryLine1, materialLine1 );
			line1.name = "line";
			//line1.position.z = 1;
			lineGroup.add(line1);
			objects.push(line1);
			//Circle für Linie 1
			var geometryCircleForLine = new THREE.CircleGeometry( 15, 32 );
			var materialCircleForLine = new THREE.MeshBasicMaterial( { color: 0xc384fa5, side:THREE.DoubleSide } );
			var circleForLine = new THREE.Mesh( geometryCircleForLine, materialCircleForLine );
			circleForLine.name = "circleForLine";
			circleForLine.position.y = 150;
			circleForLine.position.z = 1;
			lineGroup.add( circleForLine );
			objects.push(circleForLine);
		//	lineGroup.name = "lineGroup";
			
	return lineGroup;
}

function init() {

	//SZENE
	scene = new THREE.Scene();
	circles = createCircles();
	lines = createLines();
	scene.add(circles);
	scene.add(lines);
	
	//LIGHT
	var spotLight = new THREE.SpotLight(0xffffff);

	 spotLight.position.x = 30;
	 spotLight.position.y = 40;
	 spotLight.position.z = 50;
	 spotLight.castShadow = true;

	scene.add(spotLight);

	scene.add(new THREE.CameraHelper(spotLight.shadow.camera));

	//CAMERA
	camera = new THREE.OrthographicCamera( widthMain / - 2, widthMain / 2, heightMain / 2, heightMain / - 2, near, far );
	camera.aspect = widthMain / heightMain;
	camera.position.z = 2000;
	camera.updateProjectionMatrix();
	scene.add( camera );
	
	//RENDERER
	renderer = new THREE.WebGLRenderer();
    container = document.getElementById( 'main' );
	document.body.appendChild( container );
	renderer.setSize(widthMain, heightMain);
	renderer.setClearColor(new THREE.Color(0X020a28));
	container.appendChild( renderer.domElement );
	camera.lookAt(circles.position);
	//RENDERING
	function renderScene() {

		renderer.render(scene, camera);

		requestAnimationFrame(renderScene);
	}	

	renderScene();
};
window.onload = init;


//MOUSE MOVE
mousePosition = new THREE.Vector2();

document.getElementById("main").onmousemove = function (event) {
	
 mousePosition.x = ( ( event.clientX - container.offsetLeft ) / container.clientWidth ) * 2 - 1;       
 mousePosition.y = - ( ( event.clientY - container.offsetTop ) / container.clientHeight ) * 2 + 1;   
 
};

	//MOUSE-EVENT
	var raycaster = new THREE.Raycaster();

	document.getElementById("main").onclick = function (event) { 

		raycaster.setFromCamera(mousePosition, camera);
		
		var intersects = raycaster.intersectObjects(objects, false);
		console.log(intersects);
		if (intersects.length > 0) {

	        var firstHit = intersects[0].object;
	       
	        if(firstHit.name === "circle") {

	            console.log("YES!");
	        }
	        
	        else if(firstHit.name === "line"){
	        	console.log("line");
	        }
	        else if(firstHit.name === "center"){
	        	console.log("center");
	        }
	        else if(firstHit.name === "centerCircle"){
	        	console.log("centerCircle");
	        }
	        else if(firstHit.name === "dashedCircle"){
	        	console.log("dashedCircle");
	        }
	        else if(firstHit.name === "line"){
	        	console.log("line");
	        }
	        else if(firstHit.name === "circleForLine"){
	        	console.log("circleForLine");
	        	
	        }
		}
	}
//ANIMATION
	
	