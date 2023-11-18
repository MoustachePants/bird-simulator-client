import { useEffect, useState } from "react";
import { APIURL } from "../../config.js";

const useBirdCommand = () => {
  const [requiredCommand, setRequiredCommand] = useState({
    tailNum: null,
    speed: null,
    altitude: null,
    destination: { lat: null, lng: null },
    routeDestination: { lat: null, lng: null },
  });

  useEffect(() => {
    const commandBody = {
      tailNum: Number(requiredCommand.tailNum),
      requiredAltitude: requiredCommand.altitude
        ? Number(requiredCommand.altitude)
        : undefined,
      requiredSpeed: requiredCommand.speed
        ? Number(requiredCommand.speed)
        : undefined,
      requiredPosition: requiredCommand.destination,
      requiredRoutePosition: requiredCommand.routeDestination,
    };

    if (commandBody.tailNum) {
      const sendCommand = async () => {
        await fetch(APIURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commandBody),
        });
      };
      sendCommand();
    }
  }, [requiredCommand]);

  return setRequiredCommand;
};

export default useBirdCommand;
