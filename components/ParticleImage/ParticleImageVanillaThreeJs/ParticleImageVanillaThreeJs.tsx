import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useWindowSize } from "react-use";
import classNames from "classnames";
import { hasHeightClass, hasWidthClass } from "@/utils/dom.utils";
import Particles from "../Particles/Particles";
import InteractiveControls from "../InteractiveControls";

interface ParticleImageVanillaThreeJsProps
  extends HTMLAttributes<HTMLDivElement> {
  src: string;
}

// Vanilla Three JS
export const ParticleImageVanillaThreeJs = ({
  src,
  className,
}: ParticleImageVanillaThreeJsProps) => {
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

    window.addEventListener("resize", resize.bind(this));

    // Append only once
    if (ref.current && ref.current.innerHTML === "") {
      ref.current?.appendChild(renderer.domElement);
    }

    animate();
    resize();

    // Hack to ensure the particles hover is aligned
    setTimeout(() => {
      resize();
      setTimeout(() => {
        resize();
        setTimeout(() => {
          resize();
        }, 1);
      }, 1);
    }, 1);
  }, [src, isMobile]);

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
