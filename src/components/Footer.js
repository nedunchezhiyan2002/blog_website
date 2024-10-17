import "./FooterStyles.css";

import React from "react";
import facebook from "../assets/facebook-icon.jpeg"
import Linkedin from "../assets/linkedin.png"
import GitHub from "../assets/github.png"
import  Twitter from "../assets/twitter.png"

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <a href="mailto:nedunchezhiyan1010@gmail.com">
          nedunchezhiyan1010@gmail.com
        </a>
        <div class="social">
          <a href="/">
            <img height="20px" width="20px" src={facebook} alt="Facebook" />Facebook
          </a>
          <a href="/">
            <img height="20px" width="20px" src={Linkedin}  alt="Linkedin" />Linkedin
          </a>
          <a href="/">
            <img height="20px" width="20px" src={GitHub} alt="GitHub" />Github
          </a>
          <a href="/">
            <img height="20px" width="20px" src={Twitter} alt="Twitter" />Twitter
          </a>
        </div>
        <p className="copyright">
          Copyright &copy; NedunchezhiyanK 2024, All rights
          reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
