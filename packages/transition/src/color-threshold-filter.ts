declare global {
  namespace PIXI {
    export namespace filters {
      export class ColorThresholdFilter extends Filter<ColorThresholdFilterUniforms> {}
    }
  }
  interface ColorThresholdFilterUniforms {
    threshold: number
    white: boolean
    fadingIn: boolean
  }
}

export class ColorThresholdFilter extends PIXI.Filter<ColorThresholdFilterUniforms> {
  constructor() {
    const fragmentSrc = /* glsl */`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float threshold;
uniform bool white;
uniform bool fadingIn;
void main(void) {
    vec4 color = texture2D(uSampler, vTextureCoord);
    float v = 0.298912 * color.r + 0.586611 * color.g + 0.114478 * color.b;
    if (white) {
        if (fadingIn) {
            gl_FragColor = vec4(vec3(threshold - v), 0.0);
        } else {
            gl_FragColor = vec4(vec3(1.0 - (v - threshold)), 0.0);
        }
    } else {
        if (fadingIn) {
            gl_FragColor = vec4(vec3(0.0), threshold - v);
        } else {
            gl_FragColor = vec4(vec3(0.0), 1.0 - (v - threshold));
        }
    }
}`
    const uniforms = {
      threshold: { type: '1f', value: 0.5 },
      white: { type: 'b', value: false },
      fadingIn: { type: 'b', value: false },
    }
    super(null, fragmentSrc, uniforms)
  }
}
