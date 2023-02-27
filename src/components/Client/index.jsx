import "./client.css";

import Map from "./Map";
import SideMenu from "./SideMenu/index.jsx";
import ClientHeader from "./ClientHeader/index.jsx";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const Client = (props) => {
  const [entitiesFilter, setEntitiesFilter] = useState({
    migrationPaths: false,
    feedingAreas: true,
  });

  return (
    <div className="client-container">
      <Logo />
      {/*<ClientHeader setFilter={setEntitiesFilter} filter={entitiesFilter} />*/}
      {props.selectedBirdTailNum !== undefined && (
        <SideMenu birdData={props.birdsData[props.selectedBirdIndex]} />
      )}
      <main>
        <Map
          birdsData={props.birdsData}
          onSelectBird={props.onSelectBird}
          selectedBirdTailNum={props.selectedBirdTailNum}
          onOpenBirdEyeView={props.onOpenBirdEyeView}
          entities={entitiesFilter}
        />
      </main>
      {/*<footer>this is the footer</footer>*/}
    </div>
  );
};

export default Client;
