attribute vec3 aPosition;
attribute vec3 aNormal;
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
uniform mat3 uNormalMatrix;

varying vec3 Normal, FragPos;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4; // asignando coordenadas de vertices en 3D

  vec3 surfaceVertexNormal = uNormalMatrix * aNormal; // Calculando los vectores normales
  vec3 eyePosition = vec3(uModelViewMatrix * positionVec4); // Calculando la posicion del ojo en el mundo

  Normal = surfaceVertexNormal;
  FragPos = eyePosition;
}