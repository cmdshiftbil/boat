import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import * as THREE from "three";

interface ThreeDModelProps {
  src: string;
}
type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

const ThreeDModel = ({ src }: ThreeDModelProps) => {
  const gltf = useLoader(GLTFLoader, src);
  // console.log({ nodes, material: materials["fallback Material"] });
  console.log({
    gltf,
    "gltf.scene": gltf.scene,
  });
  return <primitive object={gltf.scene} />;

  // const group = useRef<THREE.Group>(null);
  // const { nodes, materials } = useGLTF(src) as GLTFResult;
  // const m = materials[Object.keys(materials)[0]];
  // // console.log("ThreeDModel", { nodes, materials, m });

  // return (
  //   <group ref={group} dispose={null} scale={0.4}>
  //     {Object.keys(nodes)
  //       .filter((k) => nodes[k].type === "Mesh")
  //       .map((k, idx) => {
  //         // console.log("ThreeDModel rendering", { idx, k, n: nodes[k] });
  //         return (
  //           <mesh
  //             key={idx}
  //             castShadow
  //             receiveShadow
  //             geometry={nodes[k].geometry}
  //             material={m}
  //           />
  //         );
  //       })}
  //   </group>
  // );
};

// useGLTF.preload("/Poimandres.gltf");

export default ThreeDModel;
