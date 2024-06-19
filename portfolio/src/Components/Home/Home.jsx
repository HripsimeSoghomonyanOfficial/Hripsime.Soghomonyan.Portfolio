import React from "react";
import style from "./Home.module.css";
import Bio from "./Bio/Bio";
import ContactInfo from "./ContactInfo/ContactInfo";
import Education from "./Education/Education";
import Languages from "./Languages/Languages";
import Skills from "./Skills/Skills";
import Experiance from "./Experiance/Experiance";
import Portfolio from "./Portfolio/Portfolio";
import Photostory from "../Photostory/Photostory";

export default function Home() {
  return (
    <>
      <Bio />
      <div className={style.info}>
        <div className={style.conlen}>
          <ContactInfo />
          <Languages />
        </div>
        <div className={style.edu}>
          <Experiance />
        </div>
      </div>
      <div className={style.info}>
        <div className={style.conlen}>
          <Skills />
        </div>
        <div className={style.edu}>
          <Education />
        </div>
      </div>
      <div className={style.portfolio}>
        <h3>Portfolio</h3>
        <Portfolio />
        <Photostory />
      </div>
    </>
  );
}
