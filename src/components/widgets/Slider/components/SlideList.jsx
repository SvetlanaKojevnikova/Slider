import React, { useContext } from "react";
import Slide from "./Slide";

import "../styles.scss";

export default function SlidesList({ slideNumber, items, currentPosition }) {
  console.log(items);

  return (
    <div
      className="slide-list"
      style={slideNumber===0?{ transform: `translateX(-${slideNumber *66.6}%)` }:{ transform: `translateX(-${slideNumber *20}%)` }}
    >
      {items.map((slide, index) => {
        return (
          <Slide
            key={index}
            {...slide}
            
    
            // className={index==slideNumber?"activePanel":""}
          />
        );
      })}
    </div>
  );
}
