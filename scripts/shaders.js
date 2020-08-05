this.global.shaders={};
if(!Vars.headless){
  try{

    importPackage(Packages.arc.graphics.gl);
    const shader = new JavaAdapter(Shader, {
      apply(){
        this.setUniformf("u_time", Time.time() / Scl.scl(1.0));
      }
    },
    //todo make multiline strings work
    "uniform mat4 u_projTrans;attribute vec4 a_position;attribute vec2 a_texCoord0;attribute vec4 a_color;varying vec4 v_color;varying vec2 v_texCoord;void main(){gl_Position = u_projTrans * a_position;v_texCoord = a_texCoord0;v_color = a_color;}", "#ifdef GL_ES\nprecision mediump float;precision mediump int;\n#endif\nuniform sampler2D u_texture;uniform float u_time;varying vec4 v_color;varying vec2 v_texCoord;void main(){vec4 color = texture2D(u_texture, v_texCoord.xy);float t = clamp((sin(u_time * .01 + gl_FragCoord.x * .01 + gl_FragCoord.y * .005) + 1.) / 2., 0., 1.);vec3 c = vec3(mix(0., 1., t), mix(.89, .39, t), mix(1., .85, t));gl_FragColor = vec4(color.rgb * c.rgb, color.a);}");
    this.global.shaders.bittrium=shader;




  }
  catch(err){
    print("Failed to load 1 or more shaders!");
    print(err);
    print(err.stack);
    if(!this.global.shaders.hasOwnProperty("bittrium")) this.global.shaders.bittrium=Shaders.water;
{
      //try mediump
      try{
        const lowres = new JavaAdapter(Shader, {
          apply(){
            this.setUniformf("u_resolution", Core.graphics.getWidth(), Core.graphics.getHeight());
            this.setUniformf("u_time", Time.time() / Scl.scl(1.0));
          }
        },
        //todo make multiline strings work
        "uniform mat4 u_projTrans;attribute vec4 a_position;attribute vec2 a_texCoord0;attribute vec4 a_color;varying vec4 v_color;varying vec2 v_texCoord;void main(){gl_Position = u_projTrans * a_position;v_texCoord = a_texCoord0;v_color = a_color;}", "#ifdef GL_ES\nprecision mediump float;\n#endif\n#define PI 3.14159265\nuniform sampler2D u_texture;\nvarying vec4 v_color;\nvarying vec2 v_texCoord;\nuniform float u_time;\nuniform vec2 u_resolution;\nvoid main( void ) {\nvec4 color = texture2D(u_texture, v_texCoord.xy);\nfloat time = u_time*0.0001;\nfloat color1, color2, color3;\ncolor1 = (sin(dot(gl_FragCoord.xy,vec2(sin(time*1.0),cos(time*3.0)))*0.02+time*4.0)+1.0)/2.0;\nvec2 center = vec2(u_resolution.x, u_resolution.y) + vec2(u_resolution.x/2.0*sin(-time*3.0),u_resolution.y/2.0*cos(-time*10.0));\ncolor2 = (cos(length(gl_FragCoord.xy - center)*0.03)+1.0)/2.0;\ncolor3 = (color1+ color2)/2.0;\nfloat red   = (cos(PI*color3/0.5+time*3.0)+1.0)/2.0;\nfloat green   = (sin(PI*color3/0.5+time*3.0)+1.0)/2.0;\nfloat blue = (sin(PI*color3/0.25+time*3.0)+1.0)/2.0;\nvec3 fin = vec3(blue+0.6, red+0.5, green+0.5);\ngl_FragColor = vec4(color.rgb * fin, color.a);\n}");
        this.global.shaders.time=lowres;
      }
      catch(err){
        this.global.shaders.time=Shaders.tar;
      }
    }

  }
}
