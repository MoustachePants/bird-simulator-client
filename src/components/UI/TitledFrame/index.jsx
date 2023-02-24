import "./TitledFrame.css";

const TitledFrame = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <div className="titled-frame">{props.children}</div>
    </div>
  );
};

export default TitledFrame;
