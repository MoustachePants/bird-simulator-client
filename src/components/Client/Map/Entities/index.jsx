import { LayerGroup } from "react-leaflet";
import MigrationPaths from "./MigrationPaths/index.jsx";
import FeedingAreas from "./FeedingAreas/index.jsx";

const Entities = (props) => {
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
