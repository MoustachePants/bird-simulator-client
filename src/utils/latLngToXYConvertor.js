export function createLatLngToXYConverter(coordSet) {
  const lnglat1 = coordSet.lnglat1;
  const position1 = coordSet.position1;
  const lnglat2 = coordSet.lnglat2;
  const position2 = coordSet.position2;

  const dx = (position2.x - position1.x) / (lnglat2.y - lnglat1.y);
  const dy = (position2.y - position1.y) / (lnglat2.x - lnglat1.x);

  return function convertLatLngToXY(latlng) {
    const x = position1.x + dx * (latlng.y - lnglat1.y);
    const y = position1.y + dy * (latlng.x - lnglat1.x);
    return { x, y }; //the y is actually the z value
  };
}

export const coordSet = {
  lnglat1: { x: 32.686389674011664, y: 35.390270151356475 },
  position1: { x: 6.371, y: -54.653 },
  lnglat2: { x: 31.761751445069315, y: 35.54606495873485 },
  position2: { x: 11, y: 10.1 },
};

// /////////////////////////////////////////////////////////////////////////////////
// These are points that I manually took from Google Maps and positioned the mesh

//    const coordinates1 = [32.686389674011664, 35.390270151356475];
// const position1 = {
//   x: 6.371,
//   y: 0.44,
//   z: -54.653,
// };
// const coordinates2 = {x: 31.761751445069315, y:35.54606495873485}
// const position2 = {
//   x: 11,
//   y: -3,
//   z: 10.1,
// };
