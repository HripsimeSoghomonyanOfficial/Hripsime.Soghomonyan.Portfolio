import React from "react";
import style from "./Bio.module.css";
import MyPictur from "../../../Photos/Mypictur.jpg";
import CV from "./CV/HripsimeSoghomonyanCV.pdf";

export default function Bio() {
  return (
    <div className={style.container}>
      <div className={style.myPictur}>
        <img src={MyPictur} alt={MyPictur} />
      </div>
      <div className={style.text}>
        <h1>Hripsime Soghomonyan</h1>
        <h3>FullStack and Wordpress Developer</h3>
        <p>
          Creative React Developer with 2 year designing useful, approachable
          user interfaces. Knowledgeable on all aspects of Facebook's design
          best practices and emerging UI development techniques. Skilled at
          connecting exceptional assets with users via creative UI frameworks
          and careful user experience optimization. Detail-oriented, organized
          and meticulous employee. Works at fast pace to meet tight deadlines.
          Enthusiastic team player ready to contribute to company success.
        </p>
        <a href={CV} download>
          <button className={style.download}>Downlaod My CV</button>
        </a>
      </div>
    </div>
  );
}
