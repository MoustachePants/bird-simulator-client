import "./client.css";

import Map from "./Map";
import SideMenu from "./SideMenu/index.jsx";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import MapLayerControl from "./MapLayerControl/index.jsx";

const Client = (props) => {
  const [mapProperties, setMapProperties] = useState({
    currentMap: "Water Color",
    entities: {
      migrationPaths: { name: "Migration Paths", display: false },
      feedingAreas: { name: "Feeding Areas", display: true },
    },
  });

  return (
    <div className="client-container">
      <Logo />
      <MapLayerControl
        onSelectProperties={setMapProperties}
        properties={mapProperties}
      />
      {props.selectedBirdTailNum !== undefined && (
        <SideMenu birdData={props.birdsData[props.selectedBirdIndex]} />
      )}
      <main>
        <Map
          birdsData={props.birdsData}
          onSelectBird={props.onSelectBird}
          selectedBirdTailNum={props.selectedBirdTailNum}
          onOpenBirdEyeView={props.onOpenBirdEyeView}
          properties={mapProperties}
        />
      </main>
      {/*<footer>this is the footer</footer>*/}
    </div>
  );
};

export default Client;
