import React, { ComponentProps, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useWindowSize } from "react-use";
import classNames from "classnames";
import { hasHeightClass, hasWidthClass } from "@/utils/dom.utils";
import Particles from "../Particles/Particles";
import InteractiveControls from "../InteractiveControls";
import ParticleImage from "../ParticleImage";

interface ParticleImageVanillaThreeJsProps
  extends ComponentProps<typeof ParticleImage> {}

// Vanilla Three JS
export const ParticleImageVanillaThreeJs = ({
  src,
  className,
  initialSettings,
  settings,
}: ParticleImageVanillaThreeJsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<THREE.Scene>();
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>();
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [particles, setParticles] = useState<Particles>();

  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;

  // 1. initialize
  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      50,
      (ref.current?.offsetWidth ?? 100) / (ref.current?.offsetHeight ?? 100),
      1,
      10000
    );
    camera.position.z = 200;

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const p = new Particles({
      uiManager: {
        camera,
        el: renderer.domElement,
        isMobile,
      },
      initialSettings,
      settings,
    });
    setParticles(p);
    setScene(scene);
    setCamera(camera);
    setRenderer(renderer);
  }, [initialSettings, isMobile, settings]);

  // 2. setup
  useEffect(() => {
    if (scene && camera && particles && renderer) {
      // Delta generator
      const clock = new THREE.Clock(true);

      scene.add(particles.container);
      // p.init(src);
      setParticles(particles);

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        update(delta);
        draw();
      };

      const update = (delta?: any) => particles.update(delta);
      const draw = () => renderer.render(scene, camera);
      const resize = () => {
        if (!renderer) return;
        camera.aspect =
          (ref.current?.offsetWidth ?? 100) /
          (ref.current?.offsetHeight ?? 100);
        camera.updateProjectionMatrix();

        renderer.setSize(
          ref.current?.offsetWidth ?? 100,
          ref.current?.offsetHeight ?? 100
        );

        if (particles) particles.resize();
      };

      window.addEventListener("resize", resize.bind(this));
      window.addEventListener("scroll", resize.bind(this));

      // Append only once
      if (ref.current && ref.current.innerHTML === "") {
        console.log("appending!");
        ref.current?.appendChild(renderer.domElement);
      }

      animate();
      resize();

      // Hack to ensure the particles hover is aligned
      setTimeout(() => {
        resize();
      }, 1);
    }
  }, [scene, camera, particles, renderer]);

  // 3. update image
  useEffect(() => {
    if (particles && src) {
      particles.init(src);
    }
  }, [particles, src]);

  return (
    <div
      className={classNames(
        "mx-auto",
        {
          "w-[500px]": !hasWidthClass(className),
          "h-[500px]": !hasHeightClass(className),
        },
        className
      )}
      ref={ref}
    />
  );
};
