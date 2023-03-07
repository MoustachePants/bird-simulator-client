import "./gui.css";
import "./DC.css";

import { Canvas } from "@react-three/fiber";
import IsraelTerrain from "./IsraelTerrain.jsx";
import { Sky } from "@react-three/drei";
import Bird from "./Bird.jsx";
import DCHeader from "./DCHeader/index.jsx";

const DC = (props) => {
  const bird = props.birdData;

  return (
    <div className="DC-container">
      <DCHeader
        onCloseBirdEyeView={props.onCloseBirdEyeView}
        birdName={bird.name}
        birdTailNum={bird.tailNum}
      />
      <div className="canvas-container">
        <Canvas>
          <pointLight intensity={0.03} position={[7, 5, 1]} />
          <ambientLight intensity={0.6} />
          <Sky sunPosition={[7, 5, 1]} />
          <fog attach="fog" args={["white", 0, 100]} />
          <Bird
            position={bird.position}
            key={bird.tailNum}
            altitude={bird.altitude}
          />
          <IsraelTerrain />
        </Canvas>
      </div>
    </div>
  );
};

export default DC;
