import style from "./DC.module.css";
import "./gui.css";

import * as THREE from "three";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Terrain from "./Terrain";
import { useState } from "react";
import IsraelTerrain from "./IsraelTerrain.jsx";
import { Sky } from "@react-three/drei";

const DC = () => {
  // const [flight, setFlight] = useState({
  //   bearing: 360,
  //   height: 100,
  // });

  return (
    <div className={style.container}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 10000, position: [0, 0, 5] }}>
        {/*<pointLight args={["white", 2, 1500]} position={[200, 1000, 50]} />*/}
        <axesHelper />
        <ambientLight args={[0x404040, 1]} />
        <OrbitControls />
        {/*<Terrain flightState={flight} />*/}
        <IsraelTerrain />
        <pointLight intensity={2} position={[7, 5, 1]} />
        <Sky sunPosition={[7, 5, 1]} />
        <fog attach="fog" args={["white", 0, 26]} />
      </Canvas>
    </div>
  );
};

export default DC;
