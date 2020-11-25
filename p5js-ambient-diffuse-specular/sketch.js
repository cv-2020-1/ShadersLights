//this variable will hold our shader object
let myShader, slider, sliderShiny, sliderSpecu, sliderXlight, sliderYlight, sliderZlight, sliderXview, sliderYview, sliderZview, sliderAttenuation;

function preload() {
  myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, 520, WEBGL).parent("p5");
  noStroke();

  slider = createSliderPro(0, 255, 16, 10, 10)
  sliderShiny = createSliderPro(1, 256, 32, 200, 10)
  sliderSpecu = createSliderPro(0, 510, 255, 350, 10)
  sliderXlight = createSliderPro(2000, 4000, 3000, 10, 70);
  sliderYlight = createSliderPro(2000, 4000, 3000, 200, 70);
  sliderZlight = createSliderPro(2000, 4000, 3000, 350, 70);
  sliderXview = createSliderPro(2000, 4000, 2000, 10, 130);
  sliderYview = createSliderPro(2000, 4000, 2000, 200, 130);
  sliderZview = createSliderPro(2000, 4000, 3000, 350, 130);  
  sliderAttenuation = createSliderPro(0, 255, 255, 10, 190);  
}

function draw() {
  background(0);

  shader(myShader);
  myShader.setUniform("lightColor", [r/255.0, g/255.0, b/255.0]);
  myShader.setUniform("objectColor", [r2/255.0, g2/255.0, b2/255.0]);
  myShader.setUniform("lightPos", [parseFloat(sliderXlight.value()-3000), parseFloat(sliderYlight.value()-3000), parseFloat(sliderZlight.value()-3000)]);
  myShader.setUniform("viewPos", [parseFloat(sliderXview.value()-3000), parseFloat(sliderYview.value()-3000), parseFloat(sliderZview.value()-3000)]);
  myShader.setUniform("shininess", parseFloat(sliderShiny.value()));
  myShader.setUniform("ambientConstant", slider.value()/255.0);
  myShader.setUniform("specularConstant", sliderSpecu.value()/255.0);
  myShader.setUniform("atenuattionConstant", sliderAttenuation.value()/255.0);
  
  rotateX(frameCount * 0.0005);
  rotateY(frameCount * 0.005);

  // Draw some geometry to the screen
  sphere(200);
}

function windowResized() {
  resizeCanvas(windowWidth, 520);
}

function createSliderPro(min, max, value, positionx, positiony){
  var slider = createSlider(min, max, value);
  slider.position(positionx, positiony);
  slider.style('width', '100px');  
  return slider;
}