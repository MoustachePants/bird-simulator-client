import { LayerGroup } from "react-leaflet";
import MigrationPaths from "./MigrationPaths/index.jsx";
import FeedingAreas from "./FeedingAreas/index.jsx";
import { APIURL } from "../../../../../config.js";
import { useEffect, useState } from "react";

const Entities = (props) => {
  console.log(props.data);

  return (
    <>
      <LayerGroup>
        {props.display.feedingAreas.display && (
          <FeedingAreas data={props.entities.feedingAreas} />
        )}
        {props.display.migrationPaths.display && (
          <MigrationPaths data={props.entities.paths} />
        )}
      </LayerGroup>
    </>
  );
};

export default Entities;
