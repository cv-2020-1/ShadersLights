precision mediump float;

varying vec2 vTexCoord;
uniform float fogAmount;
uniform sampler2D img;

void main() {
    
    vec4 fogColor = vec4(0.68, 0.85, 0.90, 1);

    vec4 color = vec4(1.0, 0.0, 0.0, 1.0);
    // vec4 color = texture2D(img, vTexCoord);

    gl_FragColor = mix(color, fogColor, fogAmount); 
}