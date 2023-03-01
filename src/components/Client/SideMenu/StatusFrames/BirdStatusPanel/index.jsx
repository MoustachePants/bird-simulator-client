import "./BirdStatusPanel.css";

import BirdStatus from "../BirdStatus/index.jsx";

const BirdStatusPanel = ({ bird }) => {
  return (
    <section className="bird-status-container">
      <div className="bird-status-group">
        <BirdStatus
          type="speed"
          data={Number(bird.speed).toFixed(0)}
          tooltip="current speed"
        />
        <BirdStatus
          required
          type="speed"
          data={bird.required.speed}
          tooltip="required speed"
          icon={
            Number(bird.required.speed) > Number(bird.speed)
              ? "double-arrow-up"
              : "double-arrow-down"
          }
        />
      </div>
      <div className="bird-status-group">
        <BirdStatus
          type="altitude"
          data={Number(bird.altitude).toFixed(
            bird.altitude < 100 ? 2 : bird.altitude < 1000 ? 1 : 0
          )}
          tooltip="current altitude"
        />
        <BirdStatus
          required
          type="altitude"
          data={bird.required.altitude}
          tooltip="required altitude"
          icon={
            Number(bird.required.altitude) > Number(bird.altitude)
              ? "double-arrow-up"
              : "double-arrow-down"
          }
        />
      </div>
      <div className="bird-status-group">
        <BirdStatus
          type="hunger"
          data={bird.calories.current}
          tooltip="current calories"
        />
        <BirdStatus
          required
          type="average-hunger"
          data={bird.calories.averageBurnedPerMinute}
          tooltip="calories per minute"
          icon={bird.state.isEating ? "double-arrow-up" : "double-arrow-down"}
        />
      </div>
      <BirdStatus
        type="bearing"
        data={bird.bearing}
        tooltip="current bearing"
      />
      <BirdStatus
        type="position"
        data={bird.position}
        tooltip="current position"
      />
    </section>
  );
};

export default BirdStatusPanel;
