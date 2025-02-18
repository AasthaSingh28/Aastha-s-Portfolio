import * as THREE from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    primitive: { object: THREE.Object3D; ref?: React.Ref<THREE.Object3D> };
    ambientLight: Partial<THREE.AmbientLight> & { ref?: React.Ref<THREE.AmbientLight> };
    directionalLight: Partial<THREE.DirectionalLight> & { ref?: React.Ref<THREE.DirectionalLight> };
    group: JSX.IntrinsicElements["group"] & { ref?: React.Ref<THREE.Group> };
  }
}
