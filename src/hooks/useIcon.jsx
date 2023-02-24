import speedIcon from "/icons/speed-icon.png";
import altitudeIcon from "/icons/altitude-icon.png";
import bearingIcon from "/icons/bearing-icon.png";
import hungerIcon from "/icons/hunger-icon.png";
import positionIcon from "/icons/position-icon.png";
import closeIcon from "/icons/close-icon.png";
import cameraIcon from "/icons/cameraIcon.png";

const useIcon = (type) => {
  if (type === "speed") return speedIcon;
  if (type === "altitude") return altitudeIcon;
  if (type === "bearing") return bearingIcon;
  if (type === "hunger") return hungerIcon;
  if (type === "position") return positionIcon;
  if (type === "close") return closeIcon;
  if (type === "camera") return cameraIcon;
};

export default useIcon;
