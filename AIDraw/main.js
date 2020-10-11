


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

function getImageData() {
  const mbb = getMinBox()

  const dpi = window.devicePixelRatio
  const imgData = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
                                                        (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);
  return imgData
}

//preprocess data
function preprocess(imgData) {
  return tf.tidy(() => {
    //convert to a tensor
    let tensor = tf.browser.fromPixels(imgData, numChannels = 1)

    //resize
    const
  })
}

// load the model
async function load_model(){

 // wait for the model to be loaded by the browser
  model = await tf.loadLayersModel('model/model.json');

  model.predict(tf.zeros([1, 28, 28, 1]));

  //allow drawing on canvas
  //allowDrawing();

  //load the class names
  //await loadDict();
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
