import "./DCHeader.css";

import useIcon from "../../../hooks/useIcon.jsx";
const DCHeader = (props) => {
  const closeIcon = useIcon("close");

  const closeDCHandler = () => {};

  return (
    <header className="DC-header">
      <section>Pigeon #1 Eye View</section>
      <img
        onClick={closeDCHandler}
        className="DC-close-button"
        src={closeIcon}
      />
    </header>
  );
};

export default DCHeader;
