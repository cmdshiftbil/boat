"use client";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { GLTFLoader } from "@/lib/three/loaders/GLTFLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Button from "@/components/Button";

interface ThreeDModelSectionProps extends HTMLAttributes<HTMLDivElement> {
  // data: HomeData["hero"];
}

const ThreeDModelSection = ({ className }: ThreeDModelSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [scene, setScene] = useState<THREE.Scene>();
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>();
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();

  // 1. initialize
  useEffect(() => {
    // scene
    const s = new THREE.Scene();

    // camera
    const c = new THREE.PerspectiveCamera(
      80,
      (ref.current?.offsetWidth ?? 100) / (ref.current?.offsetHeight ?? 100),
      0.1,
      800
    );
    // c.position.z = 200;
    c.position.set(5, 5, 5);
    // var camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 800 );

    // renderer
    const backgroundColor = 0x000000;
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(window.devicePixelRatio);
    r.setSize(window.innerWidth, window.innerHeight);

    r.toneMapping = THREE.LinearToneMapping;
    r.toneMappingExposure = Math.pow(0.94, 5.0);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;

    setScene(s);
    setCamera(c);
    setRenderer(r);

    r.outputColorSpace = THREE.SRGBColorSpace;

    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      "3dmodels/GroundVehicle.glb",
      // "3dmodels/Wood_Tower.glb",
      // "3dmodels/Pawns.glb",
      // "3dmodels/New Shop rev.glb",
      // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf",

      // called when the resource is loaded
      function (gltf: any) {
        s.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      // called while loading is progressing
      function (xhr: any) {
        console.log({ xhr, loaded: xhr.loaded, total: xhr.total });
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error: any) {
        console.log("An error happened");
      }
    );
  }, []);

  // 2. setup
  useEffect(() => {
    if (scene && camera && renderer) {
      const renderCalls: any[] = [];

      // Delta generator
      const clock = new THREE.Clock(true);

      // scene.add(particles.container);
      // p.init(src);

      const animate = () => {
        requestAnimationFrame(animate);
        renderCalls.forEach((callback) => {
          callback();
        });
      };

      const draw = () => renderer.render(scene, camera);
      renderCalls.push(draw);

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
      };

      window.addEventListener("resize", resize.bind(this));
      window.addEventListener("scroll", resize.bind(this));

      // Append only once
      if (ref.current && ref.current.innerHTML === "") {
        ref.current?.appendChild(renderer.domElement);
      }

      const controls = new OrbitControls(camera, renderer.domElement);

      controls.rotateSpeed = 0.3;
      controls.zoomSpeed = 0.9;

      controls.minDistance = 3;
      controls.maxDistance = 20;

      controls.minPolarAngle = 0; // radians
      controls.maxPolarAngle = Math.PI / 2; // radians

      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      renderCalls.push(function () {
        controls.update();
      });

      /* ////////////////////////////////////////////////////////////////////////// */

      const light = new THREE.PointLight(0xffffcc, 20, 200);
      light.position.set(4, 30, -20);
      scene.add(light);

      const light2 = new THREE.AmbientLight(0x20202a, 20);
      light2.position.set(30, -10, 30);
      scene.add(light2);

      /* ////////////////////////////////////////////////////////////////////////// */

      animate();
      resize();

      // Hack to ensure the particles hover is aligned
      setTimeout(() => {
        resize();
      }, 1);
    }
  }, [scene, camera, renderer]);

  useEffect(() => {
    if (renderer) {
      const backgroundColor = 0x000000;
      if (isInteracting) {
        renderer.setClearColor(backgroundColor);
      } else {
        renderer.setClearColor(backgroundColor, 0);
      }
    }
  }, [isInteracting, renderer]);

  return (
    <section className="mx-auto h-[calc(100vh-205px)] flex flex-col justify-between py-12 relative">
      {!isInteracting && (
        <div className="absolute left-0 top-0 right-0 bottom-0" />
      )}
      <div className="absolute right-4 top-16 flex gap-3">
        {isInteracting && (
          <div className="text-shark-50 text-center opacity-60 flex items-center text-xs md:text-lg">
            <div className="hidden md:block">
              Use your mouse to pan & scroll to zoom
            </div>
            <div className="md:hidden">Touch the model to pan & zoom</div>
          </div>
        )}
        <Button
          onClick={() => {
            setIsInteracting(!isInteracting);
          }}
          className="p-4"
        >
          {isInteracting ? "Done" : "Explore 3D model"}
        </Button>
      </div>

      <div
        className="h-screen touch-none overflow-hidden"
        onWheel={(e) => {
          e.preventDefault();
          e.stopPropagation();

          return false;
        }}
        ref={ref}
      ></div>
    </section>
  );
};

export default ThreeDModelSection;
