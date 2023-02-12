import "./App.css";
import Client from "./components/Client";
import DC from "./components/DC";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Client />
      <DC />
    </div>
  );
}

export default App;
