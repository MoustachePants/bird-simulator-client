import style from "./DC.module.css";

import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const IsraelTerrain = () => {
  const [colorMap, displacementMap] = useLoader(TextureLoader, [
    "/DC/israel.jpg",
    "/DC/israelHeightMap.png",
  ]);

  return (
    <mesh>
      <planeGeometry args={[300, 700]} />
      <meshStandardMaterial map={colorMap} displacementMap={displacementMap} />
    </mesh>
  );
};

const DC = () => {
  return (
    <div className={style.container}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <IsraelTerrain />
      </Canvas>
    </div>
  );
};

export default DC;
