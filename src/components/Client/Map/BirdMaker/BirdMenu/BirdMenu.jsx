import style from "/src/components/Client/Map/BirdMaker/BirdMenu/BirdMenu.module.css";
import { useState } from "react";
import { Popup } from "react-leaflet";

const BirdMenu = (props) => {
  const [requiredAltitude, setRequiredAltitude] = useState();
  const [requiredSpeed, setRequiredSpeed] = useState();

  const altitudeInputChangeHandler = (event) => {
    const altitudeInInput = event.target.value;
    setRequiredAltitude(altitudeInInput);
  };

  const speedInputChangeHandler = (event) => {
    const speedInInput = event.target.value;
    setRequiredSpeed(speedInInput);
  };

  const menuSendCommand = (event) => {
    event.preventDefault();

    const commandBody = {
      tailNum: props.bird.tailNum,
      requiredAltitude,
      requiredSpeed,
    };

    const sendCommand = async () => {
      const res = await fetch("/api/FCSnew/commandCenter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commandBody),
      });
      const data = await res.json();
    };

    sendCommand();
  };

  return (
    <Popup className={style.container} position={props.position}>
      <form onSubmit={menuSendCommand}>
        <input
          type={"number"}
          placeholder={"Altitude"}
          value={requiredAltitude}
          onChange={altitudeInputChangeHandler}
        />
        <input
          type={"number"}
          placeholder={"Speed"}
          value={requiredSpeed}
          onChange={speedInputChangeHandler}
        />
        <button type={"submit"}>send</button>
      </form>
    </Popup>
  );
};

export default BirdMenu;
