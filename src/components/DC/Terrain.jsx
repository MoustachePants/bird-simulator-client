import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { math } from "../../utils/math";
import { useEffect, useRef, useState } from "react";

import perlin from "../../utils/perlin.js";
import * as THREE from "three";
// import * as dat from "dat.gui";

// const gui = new dat.GUI();
// gui.domElement.id = "gui";

const Terrain = (props) => {
  const { bearing, height } = props.flightState;
  const planeRef = useRef(null);

  const three = useThree();
  three.scene.background = new THREE.Color(0x87ceeb);

  let clock = 0;
  let test = false;
  useFrame((state, delta, frame) => {
    test ? (clock += delta / 10) : (clock -= delta / 10);
    modifyVertices(clock);
  });

  const modifyVertices = (delta = 1) => {
    const { geometry } = planeRef.current;
    const { position } = geometry.attributes;

    for (let i = 0; i < position.array.length; i += 3) {
      const x = position.array[i];
      const y = position.array[i + 1];
      // const z = position.array[i + 2];
      // const vertex = { x, y, z };

      position.array[i + 2] = perlin.get(x / 30 + delta, y / 30) * 20;
      // position.array[i + 2].color = new THREE.Color("red");
    }

    position.needsUpdate = true;
    geometry.computeVertexNormals();
  };

  // useEffect(() => {
  //   const { material } = planeRef.current;
  //   // console.log(planeRef);
  //   gui.add(material, "metalness").min(0).max(1).step(0.0001);
  //   gui.add(material, "roughness").min(0).max(1).step(0.0001);
  //   gui.add(material, "displacementScale").min(0).max(500).step(1);
  // });

  return (
    <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]}>
      {/*<planeGeometry args={[10, 10, 50, 10]} />*/}
      <planeGeometry args={[100, 100, 30, 30]} />
      <meshStandardMaterial roughness={100} metalness={0.5} />
    </mesh>
  );
};

export default Terrain;
