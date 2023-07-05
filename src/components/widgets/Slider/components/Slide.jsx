import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "./../styles.scss";

export default function Slide({ url, title, slideNumber }) {
  return (
    <div className="slide">
      <div className="active">{title}</div>
      {/* <SlideImage src={url} alt={title} /> */}
    </div>
  );
}
