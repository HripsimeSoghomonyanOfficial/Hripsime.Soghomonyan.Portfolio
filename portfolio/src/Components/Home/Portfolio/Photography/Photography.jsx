import React from "react";
import style from "./Photography.module.css";
import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpeg";
import slide3 from "./images/slide3.jpeg";
import slide4 from "./images/slide4.jpeg";
import slide5 from "./images/slide5.jpeg";
import slide6 from "./images/slide6.jpeg";
import slide7 from "./images/slide7.jpeg";

export default function Photography() {
  return (
    <div className={style.photography}>
      <h1>Photography</h1>
      <div className={style.all}>
        <div className={style.img}>
          <div>
            <img src={slide6} alt={slide6} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide2} alt={slide2} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide3} alt={slide3} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide4} alt={slide4} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide1} alt={slide1} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide5} alt={slide5} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img src={slide7} alt={slide7} />
            <a
              href={slide1}
              target="_blank"
              rel="noopener noreferrer"
              className={style.linkoverlay}
            >
              "All"
              <br />
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
