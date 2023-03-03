import "./MapProperty.css";
import { useState } from "react";
import useIcon from "../../src/hooks/useIcon.jsx";

const MapProperty = (props) => {
  const [checked, setChecked] = useState(props.value);
  const icon = useIcon(props.icon);

  const onClickHandler = () => {
    props.onClick(props.property);
    setChecked((prev) => !prev);
  };

  return (
    <button
      onClick={onClickHandler}
      className={
        checked ? "property-button property-button-checked" : "property-button"
      }
    >
      <img src={icon} className="property-icon" />
      {props.title}
    </button>
  );
};

export default MapProperty;
