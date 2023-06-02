import React, {
  ComponentProps,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as THREE from "three";
import Particles from "../Particles/Particles";
import { useWindowSize } from "react-use";
import { useThree } from "@react-three/fiber";
import ParticleImage from "../ParticleImage";
import { GMBasic, GMShader } from "../types";

interface MyMeshesProps {
  meshes: ReactElement[];
  cameraDistance?: number;
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
  const [particles, setParticles] = useState<Particles>();
  const [setupReady, setSetupReady] = useState(false);
  const [eventsReady, setEventsReady] = useState(false);
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
    // Particles
    const p = new Particles({
      uiManager: {
        el: canvasRef.current,
        isMobile,
        camera: camera as THREE.PerspectiveCamera,
        raycaster,
        mouse,
      },
      initialSettings,
      settings,
    });
    setParticles(p);
  }, [
    camera,
    canvasRef,
    initialSettings,
    isMobile,
    mouse,
    raycaster,
    settings,
  ]);

  useEffect(() => {
    if (camera && particles) {
      // Delta generator
      const clock = new THREE.Clock(true);

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
        if (particles) particles.resize(true);
      };

      window.addEventListener("resize", resize.bind(this));
      window.addEventListener("scroll", resize.bind(this));

      animate();
      particles.on("ready", () => {
        setShaderObject(particles.shaderObject);
        setBasicObject(particles.basicObject);
        resize();
      });
      particles.on("animation-complete", () => {
        resize();
      });

      setSetupReady(true);
    }
  }, [camera, canvasRef, particles]);

  useEffect(() => {
    // Initialize & prepare for Mesh objects
    if (particles && setupReady) {
      setEventsReady(true);
    }
  }, [particles, setupReady]);

  useEffect(() => {
    if (particles && src && eventsReady) {
      particles.init(src);
    }
  }, [particles, src, eventsReady]);

  const meshes = useMemo(() => {
    return !!shaderObject && !!basicObject
      ? [
          <mesh key={shaderObject.geometry.uuid}>
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
          <mesh key={basicObject.geometry.uuid}>
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
  }, [shaderObject, basicObject]);

  return meshes && <MyMeshes meshes={meshes} cameraDistance={cameraDistance} />;
};
