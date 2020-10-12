
var model;
var classNames = [];
var canvas;
var coords = [];
var mousePressed = false;
var mode;
var random;
var randClass;

//prepare drawing canvas
$(function() {
  canvas = window._canvas = new fabric.Canvas('canvas');
  canvas.backgroundColor = '#ffffff';
  canvas.isDrawingMode = 0;
  canvas.freeDrawingBrush.color = "black";
  canvas.freeDrawingBrush.width = 10;
  canvas.renderAll();
  //setup listeners
  canvas.on('mouse:up', function(e) {
    getFrame();
    mousePressed = false
  });
  canvas.on('mouse:down', function(e) {
    mousePressed = true
  });
  canvas.on('mouse:move', function(e) {
    recordCoord(e)
  });
})

//set table of the predictions
function setTable(topPred, probs) {
  //loop over the predictions
  for (var i = 0; i < topPred.length; i++) {
    let sym = document.getElementById('sym' + (i + 1));
    let prob = document.getElementById('prob' + (i + 1));
    sym.innerHTML = topPred[i]
    prob.innerHTML = Math.round(probs[i] * 100, "%");

    if(sym.innerHTML === randClass) {
      randomClass();
    }
  }
  //create the pie
  createPie(".chartID.legend", ".chartID.pie");
}

//generates random class for the user to draw
function randomClass() {
  var content = document.getElementById("ShowText");
  random = parseInt(Math.random() * classNames.length);
  randClass = classNames[random].;
  content.innerHTML = randClass;
}

//record the current drawing coordinates
function recordCoord(event){
  var pointer = canvas.getPointer(event.e);
  var posX = pointer.x;
  var posY = pointer.y;

  if (posX >= 0 && posY >= 0 && mousePressed) {
      coords.push(pointer)
  }
}

function getMinBox() {
  //get coordinates
  var coorX = coords.map(function(p) {
    return p.x
  });
  var coorY = coords.map(function(p) {
    return p.y
  });

  //find top left and bottom right corners
  var min_coords = {
    x: Math.min.apply(null, coorX),
    y: Math.min.apply(null, coorY)
  }
  var max_coords = {
    x: Math.max.apply(null, coorX),
    y: Math.max.apply(null, coorY)
  }

  return {
    min: min_coords,
    max: max_coords
  }
}

//get the current image data
function getImageData() {
  //get the minimum bounding box around the drawing
  const minB = getMinBox()

  const dpi = window.devicePixelRatio
  const imgData = canvas.contextContainer.getImageData(minB.min.x * dpi, minB.min.y * dpi,
                                                        (minB.max.x - minB.min.x) * dpi, (minB.max.y - minB.min.y) * dpi);
  return imgData
}

//get prediction
function getFrame() {
  //make sure we have at least two recorded coordinates
    if (coords.length >= 2) {

      //get the image data from the canvas
      const imgData = getImageData();

      //get the prediction
      const pred = model.predict(preprocess(imgData)).dataSync();

      //find the top prediction
      const indices = findIndicesOfMax(pred, 1);
      const probability = findTopValues(pred, 1);
      const names = getClasses(indices);

      //set the table
      setTable(names, probability)
    }
}

//get classes
function getClasses(indices) {
  var output = [];
  for (var i = 0; i < indices.length; i++)
    output[i] = classNames[indices[i]];
  return output
}

//load classes
async function loadClasses() {
  await $.ajax({
    url: 'model/classes.txt',
    dataType: 'text',
  }).done(success)
}

//load classes
function success(data) {
  const lst = data.split(/\n/)
  for (var i = 0; i < lst.length - 1; i++) {
      classNames[i] = symbol
  }
}

//get indices of the top probability
function findIndicesOfMax(input, count) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(i); // add index to output array
        if (output.length > count) {
            output.sort(function(a, b) {
                return input[b] - input[a];
            }); // descending sort the output array
            output.pop(); // remove the last index (index of smallest element in output array)
        }
    }
    return output;
}

//find the top prediction
function findTopValues(input, count) {
    var output = [];
    let indices = findIndicesOfMax(input, count);
    // show greatest score
    for (var i = 0; i < indices.length; i++)
        output[i] = input[indices[i]];
    return output
}


//preprocess data
function preprocess(imgData) {
  return tf.tidy(() => {
    //convert to a tensor
    let tensor = tf.browser.fromPixels(imgData, numChannels = 1)

    //resize
    const resized = tf.image.resizeBillinear(tensor, [28, 28]).toFloat()

    //normalize
    const offset = tf.scalar(255.0);
    const normalize = tf.scalar(1.0).sub(resized.div(offset));

    //get batch shape by adding a dimension
    const batched = normalize.expandDims(0)
    return batched
  })
}

// load the model
async function load_model(){

 // wait for the model to be loaded by the browser
  model = await tf.loadLayersModel('model/model.json');

  model.predict(tf.zeros([1, 28, 28, 1]));

  //allow drawing on canvas
  allowDrawing();

  //load the class names
  await loadClasses();
}

// allow drawing on canvas
function allowDrawing() {
    canvas.isDrawingMode = 1;
    document.getElementById('status').innerHTML = 'Model Loaded';
    $('button').prop('disabled', false);
}

// clear the canvas
function erase() {
    canvas.clear();
    canvas.backgroundColor = '#ffffff';
    coords = [];
}
