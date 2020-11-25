

let theShader;
let angle = 0.01;

function preload() {
    img = loadImage('texture.jpg');
    theShader = loadShader('shader.vert', 'shader.frag');  
}

function setup() {
    let cnv = createCanvas(500, 500, WEBGL);
    cnv.position(100, 50);

    slider = createSlider(0.0, 1.0, 0.5, 0.1);
    slider.position(110, 60);
    slider.style('width', '80px');
    noStroke();
}

function draw() {
    background(173, 217, 230);

    shader(theShader);  

    var fogAmount = slider.value();

    
    theShader.setUniform("fogAmount", fogAmount);
    theShader.setUniform("img", img);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.005);

    // texture(img);
    box(200);

    // print(frameRate());
}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }