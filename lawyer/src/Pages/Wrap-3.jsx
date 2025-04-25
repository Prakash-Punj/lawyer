
import React, { useState } from "react";

export const Wrap_3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Personal Injury",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_1.png",
    },
    {
      title: "Personal Injury",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_1.png",
    },
    {
      title: "Family Law",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_2.png",
    },
    {
      title: "Family Law",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_2.png",
    },
    {
      title: "Criminal Law",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_3.png",
    },
    {
      title: "Criminal Law",
      text: "Domestic Violence in London How a Lawyer can help I must explain to you all this mistaken idea of denouncing pleasure and praising pain was",
      img: "./Images/slide_img_3.png",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-2">
      <div className="container">
        <div className="slider-2-content grid slider-2-grid grid-two-cols">
          <div className="click-slide">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide-button ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <p>{slide.title}</p>
                <span className="position">{(index + 1).toString().padStart(2, "0")}</span>
              </div>
            ))}
          </div>

          <div className="slide-img">
            {slides.slice(activeIndex, activeIndex + 2).map((slide, index) => (
              <div key={index} className="slide-img-view">
                <img src={slide.img} alt={slide.title} />
                <div className="slide-img-content">
                  <h4>{slide.title}</h4>
                  <p>{slide.text}</p>
                  <a href="#">READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


