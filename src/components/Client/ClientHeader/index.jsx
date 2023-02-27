import "./ClientHeader.css";

import MapProperty from "./MapProperty/index.jsx";

import useIcon from "../../../hooks/useIcon.jsx";
import entities from "../Map/Entities/index.jsx";

const ClientHeader = (props) => {
  // const logo = useIcon("full-logo");

  const filterMethod = (property) => {
    props.setFilter((prev) => {
      const newState = { ...prev };
      newState[property] = !newState[property];
      return newState;
    });
  };

  return (
    <header className="client-header-container">
      {/*<section className="logo-container">*/}
      {/*  <img src={logo} className="logo" />*/}
      {/*</section>*/}
      <section className="map-filter">
        <MapProperty
          title="Migration Paths"
          property="migrationPaths"
          onClick={filterMethod}
          value={props.filter.migrationPaths}
          icon="route"
        />
        <MapProperty
          title="Feeding Areas"
          property="feedingAreas"
          onClick={filterMethod}
          value={props.filter.feedingAreas}
          icon="hunger"
        />
      </section>
    </header>
  );
};

export default ClientHeader;
