import React from "react";
import style from "./AllSlide.module.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpeg";
import slide3 from "./images/slide3.jpeg";
import slide4 from "./images/slide4.jpeg";
import slide5 from "./images/slide5.jpeg";
import slide6 from "./images/slide6.jpeg";
import slide7 from "./images/slide7.jpeg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export default function Photography() {
  return (
    
    <div className={style.photography}>
      <h1>Photography</h1>
      <div className={style.slide}>
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <img
              key={index}
              className={style.slidepic}
              src={each}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </Zoom>
      </div>
    </div>
  );
}
