import * as THREE from 'three';

import fireVertexShader from './fire.shader.vert';
import fireFragmentShader from './fire.shader.frag';

export class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '20', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 4.2 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { type: 'f', value: 3 },
        lacunarity: { type: 'f', value: 3 },
        gain: { type: 'f', value: 0.6 },
      },
      vertexShader: fireVertexShader,
      fragmentShader: fireFragmentShader,
    });
  }
}
