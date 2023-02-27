import "./BirdStatusPanel.css";

import BirdStatus from "../BirdStatus/index.jsx";
import useIcon from "../../../../../hooks/useIcon.jsx";

const BirdStatusPanel = ({ bird }) => {
  return (
    <section className="bird-status-container">
      <div className="bird-status-group">
        <BirdStatus type="speed" data={bird.speed} />
        <BirdStatus required type="speed" data={bird.required.speed} />
      </div>
      <div className="bird-status-group">
        <BirdStatus
          type="altitude"
          data={bird.altitude.toFixed(
            bird.altitude <= 100 ? 2 : bird.altitude <= 1000 ? 1 : 0
          )}
        />
        <BirdStatus required type="altitude" data={bird.required.altitude} />
      </div>

      <BirdStatus type="bearing" data={bird.bearing} />
      <BirdStatus type="hunger" data={153} />
      <BirdStatus type="position" data={bird.position} />
    </section>
  );
};

export default BirdStatusPanel;
