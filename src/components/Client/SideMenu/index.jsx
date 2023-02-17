import "./SideMenu.css";

import BirdStatusPanel from "./BirdStatusPanel/index.jsx";

const SideMenu = (props) => {
  const bird = props.birdData;

  return (
    <div className="side-menu-container">
      <section className="side-menu-header">
        <h1>Pigeon</h1>
        <h2>#{bird.tailNum}</h2>
      </section>
      <p className="bird-summery">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        asperiores blanditiis culpa dicta dolor earum eius qui quod vel?
        Accusamus alias commodi cupiditate dolore doloribus illum ipsa nam
        nostrum.
      </p>
      <BirdStatusPanel bird={bird} />
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
