

let theShader;
let angle = 0.01;

function preload() {
    img = loadImage('texture.jpg');
    theShader = loadShader('shader.vert', 'shader.frag');  
}

function setup() {
    let cnv = createCanvas(500, 500, WEBGL);
    cnv.position(100, 50);

    // slider = createSlider(0.0, 1.0, 0.5, 0.1);
    // slider.position(110, 60);
    // slider.style('width', '80px');
    noStroke();
}

function draw() {
    background(0);
    shader(theShader);  

    // var fogAmount = slider.value();

    // let dirX = (mouseX / width - 0.5) * 2;
    // let dirY = (mouseY / height - 0.5) * 2;
    // let light = directionalLight(100, 250, 250, -dirX, -dirY, -1);
    
    theShader.setUniform("iResolution", [width, height]);
    theShader.setUniform("iFrame", frameCount);
    theShader.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);
    theShader.setUniform("iTime", millis() / 1000.0);
    theShader.setUniform('img', img);
    // theShader.setUniform("fogAmount", fogAmount);
    // theShader.setUniform("iLight", light);

    rect(0, 0, width, height);

  // print out the framerate
    // print(frameRate());
}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }