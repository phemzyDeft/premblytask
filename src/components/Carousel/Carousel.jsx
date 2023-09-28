import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./Carousel.css"

const Carousel = ({ data }) => {
  
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div>
<div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, index) => {
        return (
          <div className={slide === index ? "slide" : "slide slide-hidden"}>
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}

            />
            <p style={{ fontSize: "2rem", position: "absolute", top: "10rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>{item.caption}</p>
          </div>
          
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
    </div>
  )
}

export default Carousel