import "./App.css";
import Client from "./components/Client";
import DC from "./components/DC";

import { useEffect, useState } from "react";
import { APIURL, intervalRate, runFrontInterval } from "../config.js";
import birdFinder from "./utils/birdFinder.js";

const App = () => {
  const [birdsData, setBirdsData] = useState([]);
  const [selectedBirdIndex, setSelectedBirdIndex] = useState(null);
  const [selectedEyeViewBirdIndex, setSelectedEyeViewBirdIndex] =
    useState(null);

  const selectBirdHandler = (tailNum) => {
    const { birdIndex } = birdFinder(birdsData, tailNum);
    setSelectedBirdIndex(birdIndex);
  };

  const openBirdEyeView = (tailNum) => {
    const { birdIndex } = birdFinder(birdsData, tailNum);
    setSelectedEyeViewBirdIndex(birdIndex);
  };

  const closeBirdEyeViewHandler = () => {
    setSelectedEyeViewBirdIndex(null);
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
        onOpenBirdEyeView={openBirdEyeView}
      />
      {selectedEyeViewBirdIndex !== null && birdsData !== null && (
        <DC
          birdData={birdsData[selectedEyeViewBirdIndex]}
          onCloseBirdEyeView={closeBirdEyeViewHandler}
        />
      )}
    </div>
  );
};

export default App;
