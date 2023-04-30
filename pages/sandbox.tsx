import { Canvas } from "@react-three/fiber";
import ImageParticules from "~/components/ImageParticules";
import PerspectiveDivider from "~/components/UserInterfaceElements/PerspectiveDivider";
import InteractiveParticles from "~/lib/InteractiveParticles/InteractiveParticles";

export default function Sandbox() {
  return (
    <div>
      <Canvas>
        {/* <InteractiveParticles img=""/> */}
        {/* <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ImageParticules position={[-1.2, 0, 0]} />
        <ImageParticules position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
