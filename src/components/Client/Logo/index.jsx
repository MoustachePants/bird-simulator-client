import "./Logo.css";
import useIcon from "../../../hooks/useIcon.jsx";

const Logo = () => {
  const logo = useIcon("small-logo");

  return (
    <section className="logo-container">
      <h1 className="logo-text">BirdSimulator</h1>
      <img src={logo} className="logo" />
    </section>
  );
};

export default Logo;
