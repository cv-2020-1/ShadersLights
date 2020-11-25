precision mediump float;

varying vec2 vTexCoord;

uniform vec3 lightColor;
uniform vec3 objectColor;
uniform float ambientConstant;

void main() {

  float ambientStrength = ambientConstant;
  vec3 ambient = ambientStrength * lightColor;
  vec3 result = ambient * objectColor;

  gl_FragColor = vec4(result ,1.0); 
}