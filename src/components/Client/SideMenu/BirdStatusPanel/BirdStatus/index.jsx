import "./BirdStatus.css";
import useBirdStatus from "../../../../../hooks/useBirdStatus.jsx";

const BirdStatus = (props) => {
  const statusType = props.type; // can be position, altitude, speed, bearing, hunger
  const data = props.data;

  const { icon, content, unit } = useBirdStatus(statusType, data);

  return (
    <div className="bird-status">
      <img className="status-icon" src={icon} />
      <div className="status-data">
        {content}
        {unit && <div className="unit">{unit}</div>}
      </div>
    </div>
  );
};

export default BirdStatus;
