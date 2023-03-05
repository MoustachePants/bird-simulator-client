import { Polyline, Tooltip } from "react-leaflet";

const MigrationPaths = ({ data }) => {
  const pathsData = data;

  return pathsData.map((path) => (
    <Polyline
      positions={path.path}
      pathOptions={{ weight: 20, opacity: 0.7, color: "purple" }}
      key={Math.random()}
    >
      <Tooltip sticky>{path.title}</Tooltip>
    </Polyline>
  ));
};

export default MigrationPaths;
