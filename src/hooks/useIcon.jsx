import speedIcon from "/icons/speed-icon.png";
import altitudeIcon from "/icons/altitude-icon.png";
import bearingIcon from "/icons/bearing-icon.png";
import hungerIcon from "/icons/hunger-icon.png";
import positionIcon from "/icons/position-icon.png";
import closeIcon from "/icons/close-icon.png";
import cameraIcon from "/icons/camera-icon.png";
import routeIcon from "/icons/route-icon.png";
import rightArrow from "/icons/right-arrow-icon.png";

import birdIcon from "/birds/birdIcon.png";
import beeIcon from "/birds/beeIcon.png";
import butterfly from "/birds/butterflyIcon.png";

import fullLogo from "/logo/full-logo.png";
import smallLogo from "/logo/small-logo.png";

const useIcon = (type) => {
  if (type === "speed") return speedIcon;
  if (type === "altitude") return altitudeIcon;
  if (type === "bearing") return bearingIcon;
  if (type === "hunger") return hungerIcon;
  if (type === "position") return positionIcon;
  if (type === "close") return closeIcon;
  if (type === "camera") return cameraIcon;
  if (type === "route" || type === "path") return routeIcon;
  if (type === "right-arrow") return rightArrow;

  if (type === "bee") return beeIcon;
  if (type === "butterfly") return butterfly;
  if (type === "bird") return birdIcon;

  if (type === "full-logo") return fullLogo;
  if (type === "small-logo") return smallLogo;
};

export default useIcon;
