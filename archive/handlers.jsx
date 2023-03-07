export const timeToTravel = (velocity, distance) => {
  const speedInMetersPerSecond = velocity / 3600;
  const timeInSeconds = distance / speedInMetersPerSecond;
  return timeInSeconds * 1000;
};

export const distanceBetweenTwoCords = (lat1, lon1, lat2, lon2) => {
  const toRadians = (angle) => angle * (Math.PI / 180);
  const earthRadius = 6371; // radius of Earth in km
  const latRadians1 = toRadians(lat1);
  const latRadians2 = toRadians(lat2);
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(latRadians1) *
      Math.cos(latRadians2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
};
