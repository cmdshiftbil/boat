"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Particles from "./particles/particles";
import InteractiveControls from "./InteractiveControls";
import { useWindowSize } from "react-use";

// TODO: Eventually customize this for Particle effect for R3F
interface MeshProps {
  src: string;
}

const Mesh = ({ src }: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

interface ParticleImageProps {
  src: string;
}

// Vanilla JS
// TODO: Convert to R3F

const ParticleImage = ({ src }: ParticleImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particles>();
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;

  useEffect(() => {
    // Delta generator
    const clock = new THREE.Clock(true);

    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      50,
      (ref.current?.offsetWidth ?? 100) / (ref.current?.offsetHeight ?? 100),
      1,
      10000
    );
    camera.position.z = 300;

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Interactive
    const interactive = new InteractiveControls(
      camera,
      renderer.domElement,
      isMobile
    );

    const p = new Particles({ camera, interactive });
    p.init(src);
    scene.add(p.container);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      update(delta);
      draw();
    };

    const update = (delta?: any) => p.update(delta);
    const draw = () => renderer.render(scene, camera);
    const resize = () => {
      if (!renderer) return;
      camera.aspect =
        (ref.current?.offsetWidth ?? 100) / (ref.current?.offsetHeight ?? 100);
      camera.updateProjectionMatrix();

      renderer.setSize(
        ref.current?.offsetWidth ?? 100,
        ref.current?.offsetHeight ?? 100
      );

      if (p) p.resize();
      if (interactive) interactive.resize();
      setParticles(p);
    };

    setTimeout(() => {
      resize();
    });

    window.addEventListener("resize", resize.bind(this));

    // Append only once
    if (ref.current && ref.current.innerHTML === "") {
      ref.current?.appendChild(renderer.domElement);
    }

    animate();
  }, [src, isMobile]);

  // TODO: R3F Sample
  // return (
  // <Canvas>
  //   <Mesh src={src} />
  // </Canvas>
  // )
  return <div className="mx-auto w-[500px] h-[500px]" ref={ref} />;
};

export default ParticleImage;

// Vanilla ThreeJs
// TODO: Sample testing, delete eventually
// const ParticleImage = ({ src }: ParticleImageProps) => {+
//   const ref = useRef<HTMLDivElement>(null);
//   const [myRenderer, setMyRenderer] = useState<THREE.WebGLRenderer>();
//   const [myScene, setMyScene] = useState<THREE.Scene>();
//   const [myCamera, setMyCamera] = useState<THREE.Camera>();
//   const [myCube, setMyCube] = useState<THREE.Mesh>();
//   const isThreeReady = !!myScene && !!myRenderer && !!myCamera;

//   const generateCube = () => {
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     // const geometry = new THREE.BoxGeometry(2, 2, 2);
//     const material = new THREE.MeshBasicMaterial({ color: "red" });
//     const cube = new THREE.Mesh(geometry, material);

//     return cube;
//   };

//   // Setup Scene
//   // Add objects to the scene
//   // Call animate
//   useEffect(() => {
//     // Setup Scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(
//       ref.current?.offsetWidth ?? 100,
//       ref.current?.offsetHeight ?? 100
//     );
//     ref.current?.appendChild(renderer.domElement);

//     // Add a cube
//     const cube = generateCube();
//     scene.add(cube);

//     // Set camera position
//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };
//     setMyRenderer(renderer);
//     setMyCamera(camera);
//     setMyScene(scene);
//     setMyCube(cube);

//     // Animate
//     animate();
//   }, []);

//   return (
//     <div className="w-[300px] h-[300px]" ref={ref}>
//       ParticleImage
//     </div>
//   );
// };

// export default ParticleImage;
