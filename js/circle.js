//Größe des Main-Containers holen
widthMain = $('#main').width();
heightMain = $('#main').height();
near = 1;
far = 100;
console.log(widthMain, heightMain);
const DEG_TO_RAD = Math.PI / 180;


//OBJEKTE
function  createCircles() {	
	
			var circleGroup = new THREE.Group();
			 objects = [];
			//Zentrum
			var geometry = new THREE.CircleGeometry( 5, 32 );
			var material = new THREE.MeshBasicMaterial( { color: 0x666666 } );
			var center = new THREE.Mesh( geometry, material );
			center.name = "center";
			circleGroup.add( center );
			objects.push(center);
			//Zentrum Ring
			var geometry = new THREE.CircleGeometry( 100, 320 );
			var edges = new THREE.EdgesGeometry( geometry );
			var centerCircle = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x666666 } ) );
			circleGroup.add( centerCircle );
			objects.push(centerCircle);
			//innerer Ring, gepunktet
			var geometry = new THREE.CircleGeometry( 200, 320 );
			var edges = new THREE.EdgesGeometry( geometry );
			var dashed = new THREE.LineDashedMaterial( { color: 0x666666, linewidth: 5, scale: 1, dashSize: 5, gapSize: 5, } );
			var dashedCircle = new THREE.LineSegments( edges, dashed);
			dashedCircle.computeLineDistances();
			circleGroup.add( dashedCircle );
			objects.push(dashedCircle);
			//äußerer Ring
			var geometry = new THREE.CircleGeometry( 300, 320 );
			var edges = new THREE.EdgesGeometry( geometry );
			var circle = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xc666666 } ) );
			circleGroup.add( circle );
			objects.push(circle);
	return circleGroup;
}

function createLines(){
			var lineGroup = new THREE.Group();
			//Linie 1
			var geometry = new THREE.Geometry();
		//	geometry.vertices.push(new THREE.Vector3( -100, 0, 0) );
			geometry.vertices.push(new THREE.Vector3(0, 200, 0) );
			geometry.vertices.push(new THREE.Vector3(0, 0, 0) );
			var material = new THREE.LineBasicMaterial( { color: 0xffffff } );
			var line1 = new THREE.Line( geometry, material );
			line1.name = "line";
			//line1.position.z = 1;
			lineGroup.add(line1);
			objects.push(line1);
			//Circle für Linie 1
			var geo = new THREE.CircleGeometry( 20, 32 );
			var mat = new THREE.MeshBasicMaterial( { color: 0xc384fa5, side:THREE.DoubleSide } );
			var circleForLine = new THREE.Mesh( geo, mat );
			circleForLine.name = "circle";
			circleForLine.position.y = 200;
		//	circleForLine.rotation.y =  180 * DEG_TO_RAD;
			//circleForLine.position.z = 2;
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
	 spotLight.shadow.mapSize.width = widthMain;
	 spotLight.shadow.mapSize.height = heightMain;

	
	scene.add(spotLight);
	
	spotLight.shadow.camera.aspect = 1;

	spotLight.shadow.camera.near = 10;
	spotLight.shadow.camera.far = 40;

	scene.add(new THREE.CameraHelper(spotLight.shadow.camera));

	//CAMERA
	camera = new THREE.OrthographicCamera( widthMain / - 2, widthMain / 2, heightMain / 2, heightMain / - 2, near, far );
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 100;
	camera.aspect = widthMain / heightMain;
	camera.updateProjectionMatrix();
	scene.add( camera );
	
	//RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(widthMain, heightMain);
	renderer.setClearColor(new THREE.Color(0X020a28));
	document.getElementById("main").appendChild(renderer.domElement);
	camera.lookAt(circles.position);
	
	//RENDERING
	function renderScene() {

		renderer.render(scene, camera);

		requestAnimationFrame(renderScene);
	}	

	renderScene();
};

window.onload = init;

