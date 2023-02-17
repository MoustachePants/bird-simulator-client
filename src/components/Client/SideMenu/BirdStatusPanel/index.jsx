import "./BirdStatusPanel.css";

import BirdStatus from "./BirdStatus/index";

const BirdStatusPanel = (props) => {
  return (
    <section className="bird-status-container">
      <div className="bird-status-group">
        <BirdStatus type="speed" data={props.bird.speed} />
        <BirdStatus type="altitude" data={props.bird.altitude} />
      </div>
      <div className="bird-status-group">
        <BirdStatus type="bearing" data={props.bird.bearing} />
        <BirdStatus type="hunger" data={153} />
      </div>
      <BirdStatus type="position" data={props.bird.position} />
    </section>
  );
};

export default BirdStatusPanel;