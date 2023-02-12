import style from "/styles/Client/SideMenu.module.css";

import BirdStatus from "@/components/Index/BirdStatus";

const SideMenu = () => {
  return (
    <div className={style.sideMenuContainer}>
      <h1 className={style.birdNameTitle}>The Pigeon</h1>
      <h3 className={style.birdSummerySentence}>a bird with white hat</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias atque
        corporis dignissimos distinctio excepturi laborum necessitatibus nihil
        nulla officia provident rem repellendus suscipit ut, voluptates! Facere
        fugiat inventore quibusdam.
      </p>
      <section className={style.birdClassificationSection}>
        <h4>order: lorem</h4>
        <h4>species: ipsum</h4>
      </section>
      <section className={style.birdStatusSection}>
        <BirdStatus />
        <BirdStatus />
        <BirdStatus />
      </section>
      <section className={style.birdRoutesSection}></section>
    </div>
  );
};

export default SideMenu;
