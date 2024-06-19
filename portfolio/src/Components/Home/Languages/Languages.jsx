import React from "react";
import style from "./Languages.module.css";

export default function Languages() {
  return (
    <div className={style.leng}>
      <h2>Languages</h2>
      <div className={style.lenguage}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_arm}></div>
        </div>
        <p>Armenian</p>
      </div>
      <div className={style.lenguage}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_eng}></div>
        </div>
        <p>English</p>
      </div>
      <div className={style.lenguage}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_ru}></div>
        </div>
        <p>Russian</p>
      </div>
      <div className={style.lenguage}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_gr}></div>
        </div>
        <p>Greek</p>
      </div>
    </div>
  );
}
