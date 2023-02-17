import speedIcon from "/icons/speed-icon.png";
import altitudeIcon from "/icons/altitude-icon.png";
import bearingIcon from "/icons/bearing-icon.png";
import hungerIcon from "/icons/hunger-icon.png";
import positionIcon from "/icons/position-icon.png";

const useBirdStatus = (statusType, data) => {
  const status = { icon: null, content: null, unit: null };

  if (statusType === "speed") {
    status.icon = speedIcon;
    status.content = data;
    status.unit = "knots";
  }

  if (statusType === "altitude") {
    status.icon = altitudeIcon;
    status.content = data;
    status.unit = "feet";
  }

  if (statusType === "bearing") {
    status.icon = bearingIcon;
    status.content = data.toFixed(0) + "°";
    // status.unit = "°";
  }

  if (statusType === "position") {
    status.icon = positionIcon;
    status.content = data.lat.toFixed(6) + ", " + data.lng.toFixed(6);
  }

  if (statusType === "hunger") {
    status.icon = hungerIcon;
    status.content = data;
    status.unit = "cal";
  }

  return status;
};

export default useBirdStatus;
