import "./App.css";
import Client from "./components/Client";
import DC from "./components/DC";

import { useEffect, useState } from "react";
import { APIURL, intervalRate, runFrontInterval } from "../config.js";
import birdFinder from "./utils/birdFinder.js";

function App() {
  const [birdsData, setBirdsData] = useState([]);
  const [selectedBird, setSelectedBird] = useState({
    bird: {},
    birdIndex: null,
  });

  const selectBirdHandler = (tailNum) => {
    const { bird, birdIndex } = birdFinder(birdsData, tailNum);
    setSelectedBird({ bird, birdIndex });
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
      <Client birdsData={birdsData} onSelectBird={selectBirdHandler} />
      {selectedBird.birdIndex && <DC birdData={selectedBird.bird} />}
    </div>
  );
}

export default App;
