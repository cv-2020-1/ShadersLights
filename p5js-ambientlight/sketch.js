//this variable will hold our shader object
let myShader, slider;

function preload() {
  myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, 520, WEBGL).parent("p5");
  //noStroke();

  slider = createSlider(0, 255, 255);
  slider.position(10, 10);
  slider.style('width', '100px');  
}

function draw() {
  background(0);

  shader(myShader);
  myShader.setUniform("lightColor", [r/255.0, g/255.0, b/255.0]);
  myShader.setUniform("objectColor", [r2/255.0, g2/255.0, b2/255.0]);
  myShader.setUniform("ambientConstant", slider.value()/255.0);



  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);

  // Draw some geometry to the screen
  box(200);
 
}

function windowResized() {
  resizeCanvas(windowWidth, 520);
}
