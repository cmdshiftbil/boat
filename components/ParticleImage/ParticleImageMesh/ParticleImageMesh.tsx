import React, {
  ComponentProps,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from "react";
import * as THREE from "three";
import Particles from "../Particles/Particles";
import { useWindowSize } from "react-use";
import { useThree } from "@react-three/fiber";
import InteractiveControls from "../InteractiveControls";
import ParticleImage from "../ParticleImage";
import { GMBasic, GMShader } from "../types";

interface MyMeshesProps {
  cameraDistance?: number;
  meshes: ReactElement[];
}

const MyMeshes = ({ meshes, cameraDistance }: MyMeshesProps) => {
  useThree(({ camera }) => {
    camera.position.z = cameraDistance ?? 200;
  });

  return (
    <React.Fragment>
      {meshes.map((m, idx) => {
        return <React.Fragment key={idx}>{m}</React.Fragment>;
      })}
    </React.Fragment>
  );
};

interface ParticleImageMeshProps extends ComponentProps<typeof ParticleImage> {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}
export const ParticleImageMesh = ({
  src,
  canvasRef,
  initialSettings,
  settings,
  cameraDistance,
}: ParticleImageMeshProps) => {
  const [shaderObject, setShaderObject] = useState<GMShader>();
  const [basicObject, setBasicObject] = useState<GMBasic>();
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;
  const camera = useThree((state) => {
    state.camera.near = 1;
    state.camera.far = 10000;
    (state.camera as THREE.PerspectiveCamera).fov = 50;
    return state.camera;
  });

  const { raycaster, mouse } = useThree(({ raycaster, mouse }) => ({
    raycaster,
    mouse,
  }));

  const gl = useThree((state) => state.gl);

  useEffect(() => {
    if (camera) {
      // Delta generator
      const clock = new THREE.Clock(true);

      // Interactive
      const interactive = new InteractiveControls(
        camera,
        canvasRef.current,
        isMobile,
        raycaster
      );

      // Particles
      const particles = new Particles({
        uiManager: {
          camera: camera as THREE.PerspectiveCamera,
          interactive,
          raycaster,
          mouse,
        },
        initialSettings,
        settings,
      });
      particles.init(src);

      // Initialize & prepare for Mesh objects
      particles.on("ready", () => {
        setShaderObject(particles.shaderObject);
        setBasicObject(particles.basicObject);
        resize();
      });

      // Animate frames
      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        update(delta);
      };

      const update = (delta?: any) => particles.update(delta);
      const resize = () => {
        if (!canvasRef) return;

        (camera as THREE.PerspectiveCamera).aspect =
          (canvasRef.current?.offsetWidth ?? 100) /
          (canvasRef.current?.offsetHeight ?? 100);
        (camera as THREE.PerspectiveCamera).updateProjectionMatrix();

        // gl.setSize(
        //   canvasRef.current?.offsetWidth ?? 100,
        //   canvasRef.current?.offsetHeight ?? 100
        // );

        if (particles) particles.resize();
        if (interactive) interactive.resize();
      };

      window.addEventListener("resize", resize.bind(this));
      window.addEventListener("scroll", resize.bind(this));

      animate();
      setTimeout(() => {
        resize();
      }, 100);
    }
  }, [
    gl,
    src,
    initialSettings,
    settings,
    canvasRef,
    mouse,
    camera,
    raycaster,
    isMobile,
  ]);

  const meshes =
    !!shaderObject && !!basicObject
      ? [
          <mesh key={1}>
            <instancedBufferGeometry
              attributes={shaderObject.geometry.attributes}
              index={shaderObject.geometry.index}
            />
            <rawShaderMaterial
              uniforms={shaderObject.material.uniforms}
              vertexShader={shaderObject.material.vertexShader}
              fragmentShader={shaderObject.material.fragmentShader}
              depthTest={shaderObject.material.depthTest}
              transparent={shaderObject.material.transparent}
              blending={shaderObject.material.blending}
            />
          </mesh>,
          <mesh key={2}>
            <instancedBufferGeometry
              attributes={basicObject.geometry.attributes}
              index={basicObject.geometry.index}
            />
            <meshBasicMaterial
              color={basicObject.material.color}
              wireframe={basicObject.material.wireframe}
              depthTest={basicObject.material.depthTest}
            />
          </mesh>,
        ]
      : null;

  return meshes && <MyMeshes meshes={meshes} cameraDistance={cameraDistance} />;
};
