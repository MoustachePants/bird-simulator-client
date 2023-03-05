import "./MenuRangeInput.css";
import { useRef, useState } from "react";
import normalizeToPercentage from "/src/utils/normalizeToPercentage";
import TitledFrame from "../../../../../UI/TitledFrame/index.jsx";

const MenuRangeInput = (props) => {
  const ifHorizontal = !!props.horizontal;

  return (
    <div className="context-menu-section">
      {/*<header>*/}
      {/*  <img className="context-menu-icon" src={props.icon} />*/}
      {/*  <h4>{props.title}</h4>*/}
      {/*</header>*/}
      <TitledFrame title={props.title} icon={props.icon}>
        <footer
          className={ifHorizontal ? "rotate-90" : ""}
          style={{
            height: ifHorizontal ? "12rem" : "unset",
          }}
        >
          <h3 className={ifHorizontal ? "rotate90" : 0}>{props.minValue}</h3>
          <div className="rangeInputContainer">
            <input
              value={props.required}
              type="range"
              onChange={props.onRangeChange}
              min={props.minValue}
              max={props.maxValue}
              step={props.step}
              className="rangeInput"
            />
            <div
              className="rangeInputValueContainer"
              style={{ width: ifHorizontal ? "100%" : undefined }}
            >
              <span
                className={"rangeInputValue " + (ifHorizontal ? "rotate90" : 0)}
                style={{
                  left: `${
                    ifHorizontal
                      ? normalizeToPercentage(
                          props.required,
                          props.maxValue,
                          props.minValue
                        ) - 22
                      : normalizeToPercentage(
                          props.required,
                          props.maxValue,
                          props.minValue
                        )
                  }%`,
                }}
              >
                {Math.round(props.required)}
              </span>
            </div>
          </div>
          <h3 className={ifHorizontal ? "rotate90" : 0}>{props.maxValue}</h3>
        </footer>
      </TitledFrame>
    </div>
  );
};

export default MenuRangeInput;
