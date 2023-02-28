import "./BirdStatusPanel.css";

import BirdStatus from "../BirdStatus/index.jsx";

const BirdStatusPanel = ({ bird }) => {
  return (
    <section className="bird-status-container">
      <div className="bird-status-group">
        <BirdStatus type="speed" data={Number(bird.speed).toFixed(0)} />
        <BirdStatus required type="speed" data={bird.required.speed} />
      </div>
      <div className="bird-status-group">
        <BirdStatus
          type="altitude"
          data={Number(bird.altitude).toFixed(
            bird.altitude < 100 ? 2 : bird.altitude < 1000 ? 1 : 0
          )}
        />
        <BirdStatus required type="altitude" data={bird.required.altitude} />
      </div>

      <BirdStatus type="bearing" data={bird.bearing} />

      <div className="bird-status-group">
        <BirdStatus
          type="hunger"
          data={Number(bird.calories.current).toFixed(0)}
        />
        <BirdStatus
          required
          type="hunger"
          data={bird.calories.averageBurnedPerMinute}
        />
      </div>
      <BirdStatus type="position" data={bird.position} />
    </section>
  );
};

export default BirdStatusPanel;
