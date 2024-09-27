import React from "react";
import "./header.css";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello I'm </h5>
        <h1>LeBron James</h1>
        <h5 className="text__light">3rd Year College</h5>
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="my image" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;
