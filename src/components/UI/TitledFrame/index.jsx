import "./TitledFrame.css";

const TitledFrame = (props) => {
  return (
    <fieldset className="titled-frame-container">
      <legend>{props.title}</legend>
      <div className="titled-frame">{props.children}</div>
    </fieldset>
  );
};

export default TitledFrame;
