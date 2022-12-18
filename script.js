var canvas = new fabric.Canvas('c', { selection: false });
var grid = 50;

// create grid

for (var i = 0; i < (800 / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, 800], { stroke: '#ccc', selectable: false }));
  canvas.add(new fabric.Line([ 0, i * grid, 800, i * grid], { stroke: '#ccc', selectable: false }))
}

// add objects

canvas.add(new fabric.Rect({ 
  left: 100, 
  top: 100, 
  width: 50, 
  height: 50, 
  fill: '#faa', 
  originX: 'left', 
  originY: 'top',
  centeredRotation: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  hasControls: false,
  hasBorders: false
}));


canvas.add(new fabric.Circle({ 
  left: 0, 
  top: 0, 
  radius: 50, 
  fill: '#9f9', 
  originX: 'left', 
  originY: 'top',
  centeredRotation: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  hasControls: false,
  hasBorders: false
}));

// Create IMAGE
fabric.Image.fromURL('assets/Template.jpg', function(myImg) {
 var img1 = myImg.set({
  //Position
  left: 0,
  top: 0,
  // Scale change 50 to the scale of shit
  scaleX: 100 / myImg.width,
  scaleY: 50 / myImg.height,
  centeredRotation: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  hasControls: false,
  hasBorders: false
 })
 canvas.add(img1); 
});

fabric.Image.fromURL('assets/Dubbel_Cylinder.jpg', function(myImg) {
  var img1 = myImg.set({
   //Position
   left: 0,
   top: 0,
   // Scale change 50 to the scale of shit
   scaleX: 100 / myImg.width,
   scaleY: 50 / myImg.height,
   centeredRotation: true,
   lockRotation: true,
   lockScalingX: true,
   lockScalingY: true,
   hasControls: false,
   hasBorders: false
  })
  canvas.add(img1); 
 });

 fabric.Image.fromURL('assets/Fjad_Dubbel_Cylinder.jpg', function(myImg) {
  var img1 = myImg.set({
   //Position
   left: 0,
   top: 0,
   // Scale change 50 to the scale of shit
   scaleX: 100 / myImg.width,
   scaleY: 50 / myImg.height,
   centeredRotation: true,
   lockRotation: true,
   lockScalingX: true,
   lockScalingY: true,
   hasControls: false,
   hasBorders: false
  })
  canvas.add(img1); 
 });

// snap to grid

canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});
