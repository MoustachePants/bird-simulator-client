import useIcon from "./useIcon.jsx";
import getDirectionFromBearing from "../utils/directionFromBearing.js";

const useBirdStatus = (statusType, data, icon) => {
  const status = { icon: null, content: null, unit: null };

  status.icon = useIcon(icon || statusType);

  if (statusType === "speed") {
    status.content = data;
    status.unit = "knots";
  }

  if (statusType === "altitude") {
    status.content = data;
    status.unit = "feet";
  }

  if (statusType === "bearing") {
    const bearing = Number(data).toFixed(0);
    status.content = bearing + "°";
    status.unit = getDirectionFromBearing(bearing).toLocaleLowerCase();
  }

  if (statusType === "position") {
    status.content = Number(data.lat).toFixed(6) + ", " + data.lng.toFixed(6);
  }

  if (statusType === "hunger") {
    status.content = data;
    status.unit = "cal";
  }

  if (statusType === "average-hunger") {
    status.content = data;
    status.unit = "cpm";
  }

  return status;
};

export default useBirdStatus;
