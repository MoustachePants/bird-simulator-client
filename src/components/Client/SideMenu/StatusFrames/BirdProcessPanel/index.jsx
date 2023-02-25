import "./BirdProcessPanel.css";

import BirdStatus from "../BirdStatus/index.jsx";

const BirdProcessPanel = (props) => {
  return (
    <section className="bird-status-container">
      <div className="bird-status-group">
        <BirdStatus type="altitude" data={props.bird.required.altitude} />
      </div>
      <BirdStatus type="position" data={props.bird.required.position} />
    </section>
  );
};

export default BirdProcessPanel;
