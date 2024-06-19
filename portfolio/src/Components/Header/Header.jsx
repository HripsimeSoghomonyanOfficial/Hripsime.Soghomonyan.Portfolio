import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Logo from "../../Logo/Logo.png";
import HeaderMenu from './Headermenu/HeaderMenu'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <NavLink to={"/"}>
          <img src={Logo} alt={Logo} className={styles.logo} />
        </NavLink>
      </div>
      <div>
        <HeaderMenu />
      </div>
    </div>
  );
}
