precision mediump float;

varying vec3 Normal, FragPos;

uniform vec3 lightPos;
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;
uniform float shininess;

void main() {
  
	// ambient
	float ambientStrength = 0.5;
	vec3 ambient = ambientStrength * lightColor;
	vec3 norm = normalize(Normal);
	vec3 lightDir = normalize(lightPos - FragPos);

	// specular
	float specularStrength = 2.0;
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 reflectDir = reflect(-lightDir, norm);  
	float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
	vec3 specular = specularStrength * spec * lightColor;  
	
	vec3 result = (ambient +  specular) * objectColor;
	gl_FragColor = vec4(result, 1.0);
}