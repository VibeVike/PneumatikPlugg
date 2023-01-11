var canvas = new fabric.Canvas('c', { selection: false });
var grid = 50;
var unitScale = 10;
var canvasWidth =  200 * unitScale;
var canvasHeight = 100 * unitScale;

canvas.setWidth(canvasWidth);
canvas.setHeight(canvasHeight);

// create grid

function CreateGrid(){
	for (var i = 0; i < (canvasWidth / grid); i++) {
	canvas.add(new fabric.Line([ i * grid, 0, i * grid, canvasHeight], { type:'line', stroke: '#aaa', selectable: false}));
	canvas.add(new fabric.Line([ 0, i * grid, canvasWidth, i * grid], { type: 'line', stroke: '#aaa', selectable: false}));
	}
}

CreateGrid()

// snap to grid

canvas.on('object:moving', function(options) { 
	var QuadGrid = grid/8
 	if (options.target.type == "line") {
		options.target.set({
			left: Math.round(options.target.left / QuadGrid) * QuadGrid,
			top: Math.round(options.target.top / QuadGrid) * QuadGrid
		});
	} else {
		options.target.set({
			left: Math.round(options.target.left / grid) * grid,
			top: Math.round(options.target.top / grid) * grid
		});
	}
});
canvas.on('object:modified', function(options) {
	if (options.target.type == "line") {
		var QuadGrid = grid/4
		var newWidth = (Math.round(options.target.width / QuadGrid)) * QuadGrid;
		var newHeight = (Math.round(options.target.height / QuadGrid)) * QuadGrid;
		options.target.set({
			width: newWidth, 
			height: newHeight, 
			scaleX: 1, 
			scaleY: 1
		});
	} else {
		var newWidth = (Math.round(options.target.width / grid)) * grid;
		var newHeight = (Math.round(options.target.height / grid)) * grid;
		options.target.set({
			width: newWidth, 
			height: newHeight, 
			scaleX: 1, 
			scaleY: 1
		});
	} 	  	
});

function addObjectCanvas(event) {
		var e = document.querySelector("#ThingToAdd");

		var selectElement = document.getElementById("ThingToAdd");
		  
		if (selectElement.value == "5_2") {
			fabric.Image.fromURL('assets/5_2.jpg', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 100 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "5_2"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "3_2") {
			fabric.Image.fromURL('assets/3_2.jpg', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 100 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "3_2"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "DB") {
			fabric.Image.fromURL('assets/DB.png', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 100 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "DB"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "EM") {
			fabric.Image.fromURL('assets/EM.png', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 50 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "EM"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "EM_2") {
			fabric.Image.fromURL('assets/EM_2.png', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 50 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "EM"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "Luft_Inp") {
			fabric.Image.fromURL('assets/Luft_input.png', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 50 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "EM"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "Linje") {
			canvas.add(new fabric.Line([ 10, 0, 10, 100], { type:'line', stroke: '#', selectable: true, strokeWidth: 3}));
		} else if (selectElement.value == "Fjad") {
			fabric.Image.fromURL('assets/Fjad.png', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 50 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "Fjad"
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "Fjad_DB") {
			fabric.Image.fromURL('assets/Fjad_DB.jpg', function(myImg) {
				var img1 = myImg.set({
				 //Position
				left: 0,
				top: 0,
				scaleX: 100 / myImg.width,
				scaleY: 50 / myImg.height,
				centeredRotation: true,
				lockRotation: true,
				lockScalingX: true,
				lockScalingY: true,
				hasControls: false,
				hasBorders: false,
				id: "Fjad_DB"
				})
				canvas.add(img1); 
			});
		}
}

// export json string of array of objects in format {x,y, w, h, id}
function exportAllObjects(event) {
	var JsonData = canvas.toJSON(['lockScalingX', 'lockScalingY', 'hasControls', 'hasBorders', 'lockRotation','centeredRotation', 'id', 'selectable']);
	var JsonDataString = JSON.stringify(JsonData);
	// Set the value of the "zone" element to the JSON string
	var zone = document.getElementById('zone');
	zone.value = JsonDataString;
}

function deleteList(listItems) {
	if(listItems !== undefined) {
		var len = listItems.length;		
		var list = []
		for(var i = 0; i < len; i+= 1) {
			var item = listItems[i];		
			if (item.type === "image") {
				list.push(item);
			}
			if (item.type == "line") {
				list.push(item)
			}
		}
		len = list.length;
		for(var i = 0; i < len; i+= 1) {
			canvas.remove(list[i]);
		}
		CreateGrid()
	}
}

function deleteAllObjects(event) {
	var objects = canvas.getObjects();
	deleteList(objects);
}

function importObjectCanvas(event) {
  // Get the JSON string from the textarea element
  const jsonString = document.getElementById('zone').value;

  // Use the loadFromJSON method to restore the canvas to the saved state
  canvas.loadFromJSON(jsonString, function() {
    // Redraw the canvas after the data has been imported
    canvas.renderAll();
  });
}

var addObject = document.getElementById('addnew');
addObject.addEventListener('click', addObjectCanvas);

var exportObjects = document.getElementById('export');
exportObjects.addEventListener('click', exportAllObjects);

var deleteObjects = document.getElementById('delete');
deleteObjects.addEventListener('click', deleteAllObjects);

var importObjects = document.getElementById('import');
importObjects.addEventListener('click', importObjectCanvas);



document.addEventListener('keydown', function(event) {
	var keyPressed = event.keyCode;
	if(keyPressed == 46) {
		var activeObject = canvas.getActiveObject();
		if(activeObject !== null && activeObject.type === 'rectangle') {
			canvas.remove(activeObject);
		}
	}
});

let isDown = false;

const DrawLineCheckBox = document.getElementById('Lines');

DrawLineCheckBox.addEventListener('change', (event) => {
	if (event.target.checked) {
		document.addEventListener('mousemove', mouseMoveListener);
		document.addEventListener('mouseup', mouseUpListener);
    	document.addEventListener('mousedown', mouseDownListener);
	} else {
		document.removeEventListener('mousemove', mouseMoveListener);
		document.removeEventListener('mouseup', mouseUpListener);
 		document.removeEventListener('mousedown', mouseDownListener);
	}
});

function mouseDownListener(event) {
	// Set isDown to true when the mouse button is pressed
	isDown = true;
	var pointer = canvas.getPointer(event);
	// Round the pointer coordinates to the nearest multiple of 10
	var x1 = Math.round(pointer.x / 10) * 10;
	var y1 = Math.round(pointer.y / 10) * 10;
	var points = [ x1, y1, x1, y1 ];
	line = new fabric.Line(points, {
		strokeWidth: 2,
		fill: 'black',
		stroke: 'black',
		originX: 'center',
		originY: 'center',
		selectable: true
	});
	line.selectable = true;
	canvas.add(line);
}

function mouseMoveListener(event) {
	// Only draw the line if the mouse button is being held down
	if (!isDown) return;
	var pointer = canvas.getPointer(event);
	// Round the pointer coordinates to the nearest multiple of 10
	var x = Math.round(pointer.x / 10) * 10;
	var y = Math.round(pointer.y / 10) * 10;
	line.set({ x2: x, y2: y });
	canvas.renderAll();
}

function mouseUpListener(event) {
	isDown = false;
}