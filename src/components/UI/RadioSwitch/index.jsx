import "./RadioSwitch.css";

const RadioSwitch = ({ options, onChange, checked }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <section className="radio-switch-container">
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            value={option}
            id={option + "-radio-button"}
            name="map-switch"
            onChange={onChangeHandler}
            checked={checked === option}
          />
          <label htmlFor={option + "-radio-button"}>{option}</label>
        </div>
      ))}
    </section>
  );
};

export default RadioSwitch;
