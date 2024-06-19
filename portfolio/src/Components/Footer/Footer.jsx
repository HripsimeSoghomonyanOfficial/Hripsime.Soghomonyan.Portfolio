import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import footermenu from "./Footermenu.json";
import styles from "./Footer.module.css";
import Logo from "../../Logo/Logo.png";
import facebook from "../../Icons/Facebook.png";
import instagram from "../../Icons/Instagram.png";
import whatsapp from "../../Icons/Whatsapp.png";
import viber from "../../Icons/Viber.png";
import telegram from "../../Icons/Telegram.png";

export default function Footer() {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt={Logo} className={styles.logo} />
          </NavLink>
        </div>
        <div className={styles.socialmedia}>
          <NavLink to="https://www.facebook.com/hripsime.sogomonyan/">
            <img src={facebook} alt={facebook} />
          </NavLink>
          <NavLink to="https://www.instagram.com/hripsime.s/">
            <img src={instagram} alt={instagram} />
          </NavLink>
          <NavLink to="https://wa.me/+37499501760/">
            <img src={whatsapp} alt={whatsapp} />
          </NavLink>
          {/* <NavLink to="https://www.facebook.com/hripsime.sogomonyan/">
            <img src={viber} alt={viber} />
          </NavLink> */}
          <NavLink to="https://t.me/hripsimes28">
            <img src={telegram} alt={telegram} />
          </NavLink>
        </div>
      </div>
      <div>
        <ul
          className={
            footermenu.find((i) => i.path === location.pathname)
              ? `${styles.menum}`
              : `${styles.errormenu}`
          }
        >
          {footermenu.map((item) => (
            //  <li key={item.id} className= {item.path == location.pathname ? `${styles.menum}` : `${styles.errormenu}`}>
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active_menu" : false.toString()
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}{" "}
        </ul>
      </div>
      <div className={styles.info}>
        <ul>
          <li>
            <a href="tel:+37499501760">Phone: +37499501760</a>
          </li>
          <li>
            <a href="mailto:info@hripsimesoghomonyan.com">
              Email: info@hripsimesoghomonyan.com
            </a>
          </li>
          <li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.89596707138!2d44.40616664732808!3d40.153492405659506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1715616989502!5m2!1sru!2sam"
              className={styles.map}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
}
