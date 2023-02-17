import "./App.css";
import Client from "./components/Client";
import DC from "./components/DC";

import { useEffect, useState } from "react";
import { APIURL, intervalRate, runFrontInterval } from "../config.js";
import birdFinder from "./utils/birdFinder.js";

function App() {
  const [birdsData, setBirdsData] = useState([]);
  const [selectedBirdIndex, setSelectedBirdIndex] = useState(null);

  const selectBirdHandler = (tailNum) => {
    const { bird, birdIndex } = birdFinder(birdsData, tailNum);
    setSelectedBirdIndex(birdIndex);
  };

  useEffect(() => {
    if (!runFrontInterval) return;

    setInterval(async () => {
      const fetchBirdsData = async () => {
        const res = await fetch(APIURL);
        const data = await res.json();
        setBirdsData(data);
      };

      await fetchBirdsData();
    }, intervalRate);
  }, []);

  return (
    <div className="App">
      <Client
        birdsData={birdsData}
        selectedBirdTailNum={birdsData[selectedBirdIndex]?.tailNum}
        selectedBirdIndex={selectedBirdIndex}
        onSelectBird={selectBirdHandler}
      />
      {selectedBirdIndex !== null && (
        <DC birdData={birdsData[selectedBirdIndex]} />
      )}
    </div>
  );
}

export default App;
