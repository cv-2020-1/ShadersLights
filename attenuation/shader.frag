
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform int iFrame;
uniform vec2 iMouse;
uniform float iTime;
uniform sampler2D img;


struct LineLight {
    vec2 start;
    vec2 stop;
    vec4 color;
};
    
float attenuation(float d);

void main() {
    // Setup stuff
    vec2 position 	= 	iResolution.xy * 0.5 + vec2(sin(iTime) * 125.0, 0.0);
    float angle 	= 	iTime * 2.0;
    vec2 dir		=	vec2(cos(angle), sin(angle));
    
    
    LineLight light;
    light.color = vec4(1.0, 0.35, 0.5, 1.0);
    light.start = position - (dir * 150.0 * 0.5);
	light.stop	= position + (dir * 150.0 * 0.5);
    
    vec4 ambient = vec4(1.0, 1.0, 1.0, 1.0) * -1.0;
    
    //Start of Shader
    
    float lineLength = length(light.start - light.stop); 
 
    // Project fragCoord on line
    vec2 toPixel = gl_FragCoord.xy - position;  
    vec2 line = normalize(light.stop - position);
    vec2 projection = dot(toPixel, line) * line;
    vec2 toLine = toPixel - projection;
  
    // Clamp Projection Length to Line Length
    float projectionLength = clamp(length(projection), 0.0, lineLength * 0.5);
    // +/- direction of center
    vec2 projectionLine = normalize(projection) * projectionLength;

    // Get Final Distances for attenuation calculation
    float distToLight = length(toPixel - projectionLine);
    
    vec4 diffuse = texture2D(img, gl_FragCoord.xy / iResolution.xy); 
       
    float kd = 1.0; // Cause 2d and no normals
    float ka = 0.05;
   	gl_FragColor = (ambient * ka) + (diffuse * (light.color * kd)) * attenuation(distToLight); 
}

float attenuation(float d) { 
    float Kc = 0.25;
    float Kl = 0.1;
    float Kq = 0.001;
	return 1.0 / (Kc + Kl*d + Kq*d*d);
    // return clamp(10.0 / d, 0.0, 1.0);
}