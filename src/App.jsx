import "./App.css";
import Client from "./components/Client";
import DC from "./components/DC";

import { useEffect, useState } from "react";
import { APIURL, intervalRate, runFrontInterval } from "../config.js";

function App() {
  const [birdsData, setBirdsData] = useState([]);
  const [selectedBirdTailNum, setSelectedBirdTailNum] = useState(0);

  const selectBirdHandler = (tailNum) => {
    setSelectedBirdTailNum(tailNum);
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
      <DC birdsData={birdsData} />
    </div>
  );
}

export default App;
