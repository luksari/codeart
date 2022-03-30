import { Object3DNode } from '@react-three/fiber';
import { TextGeometry } from 'three-stdlib/geometries/TextGeometry';
import { MeshLine, MeshLineMaterial } from 'meshline';
import { MeshWobbleMaterial } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import { FireMaterial } from '@src/containers/fuego/fire/fireMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLine: Object3DNode<MeshLine, typeof MeshLine>;
      textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
      meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
      unrealBloomPass: Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>;
      meshWobbleMaterial: Object3DNode<
        MeshWobbleMaterial,
        typeof MeshWobbleMaterial
      >;
      fireMaterial: Object3DNode<FireMaterial, typeof FireMaterial>;
    }
  }
}
