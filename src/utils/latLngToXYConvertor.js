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

// newCords

export const coordSet = {
  lnglat1: { x: 32.82759660432018, y: 35.5793773807828 },
  position1: { x: 13, y: -65 },
  lnglat2: { x: 32.818035695451435, y: 34.96789467232422 },
  position2: { x: -24, y: -64 },
};

// const position1 = {
//   x: 13,
//   y: -2,
//   z: -65,
// };
// const coordinates1 = [32.82759660432018, 35.5793773807828];
// const position2 = {
//   x: -24,
//   y: -2,
//   z: -64,
// };
// const coordinates2 = [32.818035695451435, 34.96789467232422];

// OLD COORDS
// export const coordSet = {
//   lnglat1: { x: 32.686389674011664, y: 35.390270151356475 },
//   position1: { x: 6.371, y: -54.653 },
//   lnglat2: { x: 31.761751445069315, y: 35.54606495873485 },
//   position2: { x: 11, y: 10.1 },
// };

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
