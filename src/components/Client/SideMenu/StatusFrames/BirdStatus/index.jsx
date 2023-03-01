import "./BirdStatus.css";
import useBirdStatus from "../../../../../hooks/useBirdStatus.jsx";
import useIcon from "../../../../../hooks/useIcon.jsx";
import { useEffect } from "react";

const BirdStatus = (props) => {
  if (props.required && !props.data) return;
  const rightArrowIcon = useIcon("right-arrow");

  const statusType = props.type; // can be position, altitude, speed, bearing, hunger
  const data = props.data;

  const { icon, content, unit } = useBirdStatus(statusType, data, props.icon);

  return (
    <>
      {props.required && <img src={rightArrowIcon} className="arrow-icon" />}
      <div
        title={props.tooltip}
        className={
          props.required ? "bird-status bird-status-required" : "bird-status"
        }
      >
        <img className="status-icon" src={icon} />
        <div className="status-data">
          {content}
          {unit && <div className="unit">{unit}</div>}
        </div>
      </div>
    </>
  );
};

export default BirdStatus;
