import "./BirdMenu.css";

import { Popup } from "react-leaflet";
import { useCallback, useEffect, useState } from "react";
import useIcon from "../../../../../hooks/useIcon.jsx";
import useBirdCommand from "../../../../../hooks/useBirdCommand.jsx";
import MenuRangeInput from "./MenuRangeInput/index.jsx";
import birdFinder from "../../../../../utils/birdFinder.js";

const BirdMenu = (props) => {
  const speedIcon = useIcon("speed");
  const altIcon = useIcon("altitude");
  const birdEyeIcon = useIcon("camera");
  const bird = props.bird;

  const [requiredAltitude, setRequiredAltitude] = useState(
    Number(bird.required.altitude)
  );

  const [requiredSpeed, setRequiredSpeed] = useState(Number(bird.speed));
  const setRequiredCommand = useBirdCommand();

  const birdSpeedRange = bird.limits.speed;
  const birdAltitudeRange = bird.limits.altitude;

  const changeSpeedHandler = (event) => {
    const speed = event.target.value;
    if (!speed) setRequiredSpeed(null);
    setRequiredSpeed(speed);
    sendCommandHandler({ tailNum: bird.tailNum, speed });
  };

  const changeAltitudeHandler = (event) => {
    const altitude = event.target.value;
    if (!altitude) setRequiredAltitude(null);
    setRequiredAltitude(altitude);

    sendCommandHandler({ tailNum: bird.tailNum, altitude });
  };

  let sendCommandDebounce;

  const sendCommandHandler = useCallback(({ tailNum, speed, altitude }) => {
    clearTimeout(sendCommandDebounce);

    if (!speed && !altitude) return;

    sendCommandDebounce = setTimeout(() => {
      setRequiredCommand({
        tailNum,
        speed: speed || undefined,
        altitude: altitude || undefined,
      });
    }, 750);
  }, []);

  const birdEyeButtonHandler = () => {
    props.onOpenBirdEyeView(bird.tailNum);
  };

  return (
    <Popup position={props.position} closeButton={false} offset={[95, 110]}>
      <div className="bird-menu-popup-container">
        <button className="openEyeViewButton" onClick={birdEyeButtonHandler}>
          <img src={birdEyeIcon} />
          Open Eye View
        </button>
        <MenuRangeInput
          title="Set Speed"
          icon={speedIcon}
          required={requiredSpeed}
          minValue={birdSpeedRange.min}
          maxValue={birdSpeedRange.max}
          onRangeChange={changeSpeedHandler}
        />
        <MenuRangeInput
          title="Set Altitude"
          icon={altIcon}
          required={requiredAltitude}
          minValue={birdAltitudeRange.min}
          maxValue={birdAltitudeRange.max}
          onRangeChange={changeAltitudeHandler}
        />
      </div>
    </Popup>
  );
};

export default BirdMenu;
