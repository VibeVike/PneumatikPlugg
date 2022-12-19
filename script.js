var canvas = new fabric.Canvas('c', { selection: false });
var grid = 50;
var unitScale = 10;
var canvasWidth =  200 * unitScale;
var canvasHeight = 100 * unitScale;

canvas.setWidth(canvasWidth);
canvas.setHeight(canvasHeight);

// create grid

for (var i = 0; i < (canvasWidth / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, canvasHeight], { type:'line', stroke: '#ccc', selectable: false }));
  canvas.add(new fabric.Line([ 0, i * grid, canvasWidth, i * grid], { type: 'line', stroke: '#ccc', selectable: false }))
}

// snap to grid

canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});
canvas.on('object:modified', function(options) { 	  	
	var newWidth = (Math.round(options.target.getWidth() / grid)) * grid;
	var newHeight = (Math.round(options.target.getHeight() / grid)) * grid;
	
	options.target.set({ 
		width: newWidth, 
		height: newHeight, 
		scaleX: 1, 
		scaleY: 1
	});
});

function addObjectCanvas(event) {
		var min = 99;
		var max = 9999999;

		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		var id = new Date().getTime() + random;
		var e = document.querySelector("#ThingToAdd");

		var selectElement = document.getElementById("ThingToAdd");

		selectElement.addEventListener("change", function() {
		  var selectedOptionValue = this.value;
		  
		  

		  if (1 == 1) {
		  } else if (selectedOptionValue == "3_2") {
			alert("3/2 Ventil is selected");
		  } else if (selectedOptionValue == "DB") {
			alert("Dubbel Cylinder is selected");
		  } else if (selectedOptionValue == "Fjad_DB") {
			alert("Dubbel Cylinder Med Fjäder Retur is selected");
		  }
		});
		
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
				id: id
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
				id: id
				})
				canvas.add(img1); 
			});
		} else if (selectElement.value == "DB") {
			fabric.Image.fromURL('assets/DB.jpg', function(myImg) {
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
				id: id
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
				id: id
				})
				canvas.add(img1); 
			});
		}
}
// export json string of array of objects in format {x,y, w, h, id}
function exportAllObjects(event) {
	var objects = canvas.getObjects();
	var len = objects.length;
	var list = [];
	for(var i = 0; i < len; i+= 1) {
		var item = objects[i];
		var tmp = {} 
		if(item.type === 'image') {			
			// console.info(item);
			tmp.x = Math.round(item.left) / unitScale;
			tmp.y = Math.round(item.top) / unitScale;
			tmp.w = Math.round(item.width) / unitScale;
			tmp.h = Math.round(item.height) / unitScale;
			tmp.id = item.id;
			list.push(tmp);
		}
	}
	//console.info(JSON.stringify(list));
	var zone = document.getElementById('zone');	
	zone.value = JSON.stringify(list);
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
		}
		len = list.length;
		for(var i = 0; i < len; i+= 1) {
			canvas.remove(list[i]);
		}
	}
}

function deleteAllObjects(event) {
	var objects = canvas.getObjects();
	deleteList(objects);
}

function importList(listItems) {
	if(listItems !== undefined) {
		var len = listItems.length;		
		for(var i = 0; i< len; i+=1 ){
			var item = listItems[i];
			canvas.add(new fabric.Rect({ 
				left: item.x * unitScale, 
				top: item.y * unitScale, 
				width: item.w * unitScale, 
				height: item.h * unitScale, 
				type: 'rectangle',
				fill: '#fab', 
				stroke:'',
				originX: 'left', 
				originY: 'top',
				id: item.id !== undefined ? item.id : '', 
				hasControls: true,		
				centeredRotation: true
			}));		
		}
		canvas.renderAll();
	}
}

function importObjectCanvas(event) {
	var zone = document.getElementById('zone');	
	var objects = JSON.parse(zone.value);
	
	importList(objects);
}

var index = 0, duration = 500, time;
function animateStateCanvas(event) {
	var zone = document.getElementById('zone');	
	var frames = JSON.parse(zone.value);
	
	importList(frames[index]);
	
	time = setInterval(function() {
		if( index > frames.length - 1) {		
			index = 0;
			importList(frames[index]);
		} else {
			canvas.clear();
			for (var i = 0; i < (canvasWidth / grid); i++) {
				canvas.add(new fabric.Line([ i * grid, 0, i * grid, canvasHeight], { type:'line', stroke: '#ccc', selectable: false }));
				canvas.add(new fabric.Line([ 0, i * grid, canvasWidth, i * grid], { type: 'line', stroke: '#ccc', selectable: false }))
			}
			index++;
			importList(frames[index]);
		}	
	}, duration)
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
