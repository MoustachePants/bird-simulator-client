import style from "./DC.module.css";
import "./gui.css";

import * as THREE from "three";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  FlyControls,
  OrbitControls,
  FirstPersonControls,
  PointerLockControls,
} from "@react-three/drei";
// import Terrain from "./Terrain";
import { useEffect, useRef, useState } from "react";
import IsraelTerrain from "./IsraelTerrain.jsx";
import { Sky, PerspectiveCamera } from "@react-three/drei";
import Bird from "./Bird.jsx";

const DC = (props) => {
  return (
    <div className={style.container} id="DC-container">
      <Canvas>
        <pointLight intensity={2} position={[7, 5, 1]} />
        <Sky sunPosition={[7, 5, 1]} />
        <fog attach="fog" args={["white", 0, 15]} />

        {props.birdsData.map((bird) => (
          <Bird
            position={bird.position}
            key={bird.tailNum}
            altitude={bird.altitude}
            bearing={bird.bearing}
          />
        ))}
        <IsraelTerrain />
      </Canvas>
    </div>
  );
};

export default DC;
