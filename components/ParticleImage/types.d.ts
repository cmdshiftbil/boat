export interface ParticleSettings {
  randomize: number;
  depth: number;
  size: number;
}

export interface GMShader {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
}
export interface GMBasic {
  geometry: THREE.BufferGeometry;
  material: THREE.MeshBasicMaterial;
}

export interface UIManager {
  camera: THREE.PerspectiveCamera;
  interactive: InteractiveControls;
  raycaster?: THREE.Raycaster;
  mouse?: THREE.Vector2;
}
