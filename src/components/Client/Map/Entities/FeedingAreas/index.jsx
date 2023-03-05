import "../Entities.css";

import { Polygon, Tooltip } from "react-leaflet";

const FeedingAreas = ({ data }) => {
  const feedingAreasData = data;
  const clickOnPolygonHandler = (event) => {
    console.log(event);
  };

  return feedingAreasData.map((area) => (
    <Polygon
      positions={area.positions}
      key={Math.random()}
      eventHandlers={{
        click: clickOnPolygonHandler,
      }}
    >
      <Tooltip sticky>{area.title}</Tooltip>
    </Polygon>
  ));
};

export default FeedingAreas;
