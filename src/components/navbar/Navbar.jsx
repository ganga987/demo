import React from "react";
import style from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import personSvg from "../assets/persion.svg";
import { FiChevronDown } from "react-icons/fi";

function Navbar(){
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.option}>
          <p>My Assignment</p>
          <p>Chat with Mentor</p>
          <div className={style.align}>
            <img src={personSvg} alt="personSvg" />
            <span>ProfileName</span>
            <FiChevronDown />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
