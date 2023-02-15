import style from "/styles/Client/Client.module.css";

import Map from "../Map/Map.jsx";
// import SideMenu from "./SideMenu.jsx";
import { useEffect } from "react";
import Header from "./Header.jsx";
const Index = (props) => {
  return (
    <div className={style.client}>
      {/*<Header>this is the header</Header>*/}
      {/*<SideMenu>this is the aside</SideMenu>*/}
      <main>
        <Map birdsData={props.birdsData} onSelectBird={props.onSelectBird} />
      </main>
      {/*<footer>this is the footer</footer>*/}
    </div>
  );
};

export default Index;
