//this variable will hold our shader object
let myShader;

function preload() {
  myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);

  shader(myShader);
  myShader.setUniform("lightColor", [0.9, 0.4, 0.1, 1.0]);
  myShader.setUniform("objectColor", [0.8, 0.4, 0.1, 1.0]);
  myShader.setUniform("lightPos", [0.0, 0.0, 0.0]);
  myShader.setUniform("viewPos", [-1000.0, -1000.0, 0.0]);
  myShader.setUniform("shininess", 32.0);
  
  rotateX(frameCount * 0.0005);
  rotateY(frameCount * 0.005);

  // Draw some geometry to the screen
  sphere(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
