import React from "react";
import style from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={style.coninfo}>
      <h1>Contact</h1>
      <p>
        Tel: <a href="tel:+37499501760"> +37499501760</a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto: info@hripsimesoghomonyan.com">
          info@hripsimesoghomonyan.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/hripsime-soghomonyan-615962a9/">
          Hripsime Soghomonyan
        </a>
      </p>
    </div>
  );
}
