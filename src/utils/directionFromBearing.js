const getDirectionFromBearing = (bearing) => {
  const directions = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  const index = Math.round((bearing % 360) / 45) % 8;
  return directions[index];
};

export default getDirectionFromBearing;
