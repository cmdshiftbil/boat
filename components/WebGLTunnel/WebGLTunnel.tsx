"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import tunnel from "tunnel-rat";

const webglTunnel = tunnel();

function ScrollCamera() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.y = -window.scrollY;
  });
  return null;
}
const WebGLTunnel = () => {
  return (
    <div id="webgl" className=" fixed inset-0 z-0">
      <Canvas
        orthographic
        linear
        flat
        gl={{ alpha: true, antialias: true, stencil: false, depth: false }}
        dpr={[1, 2]}
      >
        <ScrollCamera />
        <webglTunnel.Out />
      </Canvas>
    </div>
  );
};

export default WebGLTunnel;
export { webglTunnel };
