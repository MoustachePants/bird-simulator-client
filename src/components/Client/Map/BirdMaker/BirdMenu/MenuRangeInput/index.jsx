import "./MenuRangeInput.css";
import { useRef, useState } from "react";

const MenuRangeInput = (props) => {
  return (
    <section className="context-menu-section">
      <header>
        <img className="context-menu-icon" src={props.icon} />
        <h4>{props.title}</h4>
      </header>
      <footer className="rangeInputContainer">
        <h3>{props.minValue}</h3>
        <input
          value={props.required}
          type="range"
          onChange={props.onRangeChange}
          min={props.minValue}
          max={props.maxValue}
          className="rangeInput"
        />
        <h3>{props.maxValue}</h3>
      </footer>
    </section>
  );
};

export default MenuRangeInput;
