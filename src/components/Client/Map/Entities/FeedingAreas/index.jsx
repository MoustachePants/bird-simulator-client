import { Polygon, Tooltip } from "react-leaflet";

const feedingAreasData = [
  {
    title: "Ma'agan Michael",
    positions: [
      [32.537797643922424, 34.90766615621025],
      [32.53835904652246, 34.90332940181934],
      [32.54911483482029, 34.90574679302003],
      [32.55445690758053, 34.905830328691515],
      [32.59086112223672, 34.91650463404478],
      [32.59008701719362, 34.92142500057675],
      [32.59388118932927, 34.924343895427874],
      [32.58786020816642, 34.92593037677571],
      [32.5841778963974, 34.924398440185904],
      [32.57284259615439, 34.91995689157689],
      [32.54738487147543, 34.91352896279102],
    ],
  },
];

const FeedingAreas = () => {
  return feedingAreasData.map((area) => (
    <Polygon positions={area.positions} key={Math.random()}>
      <Tooltip sticky>{area.title}</Tooltip>
    </Polygon>
  ));
};

export default FeedingAreas;
