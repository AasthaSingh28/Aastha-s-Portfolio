import { Object3DNode } from "@react-three/fiber";
import { Group, AmbientLight, DirectionalLight, Mesh } from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    primitive: Object3DNode<Group, typeof Group>;
    ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>;
    directionalLight: Object3DNode<DirectionalLight, typeof DirectionalLight>;
    mesh: Object3DNode<Mesh, typeof Mesh>;
  }
}
