import useIcon from "./useIcon.jsx";

const useBirdStatus = (statusType, data) => {
  const status = { icon: null, content: null, unit: null };

  status.icon = useIcon(statusType);

  if (statusType === "speed") {
    status.content = data;
    status.unit = "knots";
  }

  if (statusType === "altitude") {
    status.content = data;
    status.unit = "feet";
  }

  if (statusType === "bearing") {
    status.content = data.toFixed(0) + "°";
    // status.unit = "°";
  }

  if (statusType === "position") {
    status.content = data.lat.toFixed(6) + ", " + data.lng.toFixed(6);
  }

  if (statusType === "hunger") {
    status.content = data;
    status.unit = "cal";
  }

  return status;
};

export default useBirdStatus;
