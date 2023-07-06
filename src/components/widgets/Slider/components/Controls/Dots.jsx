import React, { useContext } from "react";
import { SliderContext } from "../../../../../Slider";


import "../../styles.scss";  

export default function Dots({ slidesCount,slideNumber,goToSlide }) {

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <div
          key={`dot-${i}`}
          className={`dot ${slideNumber === i ? "selected" : ""}`}
          onClick={() => goToSlide(i)}
        />
      );
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}
