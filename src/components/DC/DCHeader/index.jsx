import "./DCHeader.css";

import useIcon from "../../../hooks/useIcon.jsx";
const DCHeader = (props) => {
  const closeIcon = useIcon("close");

  const closeDCHandler = () => {
    props.onCloseBirdEyeView();
  };

  return (
    <header className="DC-header">
      <section>Pigeon #1 Eye View</section>
      <button className="DC-close-button" onClick={closeDCHandler}>
        <img src={closeIcon} />
      </button>
    </header>
  );
};

export default DCHeader;
