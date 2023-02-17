import "./client.css";

import Map from "../Map/Map.jsx";
import SideMenu from "./SideMenu/index.jsx";
import { useEffect } from "react";
import Header from "./Header.jsx";
const Client = (props) => {
  return (
    <div className="client-container">
      {/*<Header>this is the header</Header>*/}
      {props.selectedBirdTailNum !== undefined && (
        <SideMenu birdData={props.birdsData[props.selectedBirdIndex]} />
      )}
      <main>
        <Map
          birdsData={props.birdsData}
          onSelectBird={props.onSelectBird}
          selectedBirdTailNum={props.selectedBirdTailNum}
        />
      </main>
      {/*<footer>this is the footer</footer>*/}
    </div>
  );
};

export default Client;
