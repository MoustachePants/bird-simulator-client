import "./SideMenu.css";

import BirdStatusPanel from "./StatusFrames/BirdStatusPanel/index.jsx";
import TitledFrame from "../../UI/TitledFrame/index.jsx";
import useIcon from "../../../hooks/useIcon.jsx";

const SideMenu = (props) => {
  const exitIcon = useIcon("close");
  const bird = props.birdData;

  const onClickExit = () => {
    props.onExit(null);
  };

  return (
    <div className="side-menu-container">
      <img src={exitIcon} className="side-menu-exit" onClick={onClickExit} />
      <section className="side-menu-header">
        <h1>{bird.name}</h1>
        <h2>#{bird.tailNum}</h2>
      </section>
      <p className="bird-summery">{bird.summery}</p>
      <section className="status-frames">
        <TitledFrame title="Status">
          <BirdStatusPanel bird={bird} />
        </TitledFrame>
        {/*<TitledFrame title="On process">*/}
        {/*  <BirdProcessPanel bird={bird} />*/}
        {/*</TitledFrame>*/}
      </section>

      {/*<section className="bird-status-current-commands">*/}
      {/*  <ul>*/}
      {/*    <li>height 100 to 1000</li>*/}
      {/*    <li>velocity 50 to 70</li>*/}
      {/*  </ul>*/}
      {/*</section>*/}
    </div>
  );
};

export default SideMenu;
