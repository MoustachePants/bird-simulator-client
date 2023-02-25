import { LayerGroup } from "react-leaflet";
import MigrationPaths from "./MigrationPaths/index.jsx";
import FeedingAreas from "./FeedingAreas/index.jsx";

const Entities = (props) => {
  return (
    <>
      <LayerGroup>
        <FeedingAreas />

        <MigrationPaths />
      </LayerGroup>
    </>
  );
};

export default Entities;
