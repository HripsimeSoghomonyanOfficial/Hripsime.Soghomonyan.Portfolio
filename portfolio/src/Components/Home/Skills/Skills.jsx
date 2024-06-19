import React from "react";
import style from "./Skills.module.css";
import HtmlIcon from '@mui/icons-material/Html';

export default function Skills() {
  return (
    <div className={style.sk}>
      <h2>Skills</h2>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_html}></div>
        </div>
        <p>HTML || CSS || SASS || Bootstrap</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_js}></div>
        </div>
        <p>JS || ReactJS ||JSX || VueJS</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_node}></div>
        </div>
        <p>Typescript || Node JS  || Pyton</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_db}></div>
        </div>
        <p>Mogo DB|| MySQL</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_js}></div>
        </div>
        <p>Git || GitLab || GitHub</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_react}></div>
        </div>
        <p>Lightroom || Adobe Illustrator</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_html}></div>
        </div>
        <p>Adobe Photoshop || Figma</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_react}></div>
        </div>
        <p>Visual Studio</p>
      </div>
      <div className={style.skill}>
        <div className={style.skill_bar}>
          <div className={style.skills_title_inner_html}></div>
        </div>
        <p>PHP Storm || Web Storm</p>
      </div>
    </div>
  );
}
