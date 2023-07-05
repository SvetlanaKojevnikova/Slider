import React, { useContext } from "react";
import Slide from "./Slide";


import "../styles.scss";

export default function SlidesList({slideNumber,items,currentPosition}) {

  
  console.log(items)

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} {...slide}
        // className={slideNumber===currentPosition?"active":""}
        />
      ))}
    </div>
  );
}
