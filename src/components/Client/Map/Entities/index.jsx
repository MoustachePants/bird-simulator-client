import { LayerGroup } from "react-leaflet";
import MigrationPaths from "./MigrationPaths/index.jsx";

const Entities = (props) => {
  return (
    <>
      <LayerGroup>
        <MigrationPaths />
      </LayerGroup>
    </>
  );
};

export default Entities;
