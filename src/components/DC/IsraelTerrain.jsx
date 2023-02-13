import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const IsraelTerrain = () => {
  const elevation = useLoader(TextureLoader, "/DC/israelHeightMap.png");
  const normalMap = useLoader(TextureLoader, "/DC/NormalMap.png");
  const map = useLoader(TextureLoader, "/DC/israelSized.jpg");

  return (
    <Plane
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
      args={[64, 64, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        map={map}
        metalness={0.2}
        normalMap={normalMap}
        displacementMap={elevation}
      />
    </Plane>
  );
};

export default IsraelTerrain;
