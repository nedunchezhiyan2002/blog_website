import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>MERN</b> By Arghya.
      </span>
    </footer>
  );
};

export default Footer;