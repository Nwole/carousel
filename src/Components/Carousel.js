import React, { useState } from "react";
import "./carousel.css";
import { images } from "../Helpers/CarouselDate";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForward'  

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ background: `url(${images[currentImage].img})` }} >
        <div className="left" onClick={ () => {
         currentImage > 0 && setCurrentImage(currentImage - 1)
        }} >
            <ArrowBackIosIcon />
        </div>
        <div className="center">
        <h1>{images[currentImage].title}</h1>
        <p>{images[currentImage].subtitile}</p>
        </div>
        <div className="right" onClick={ () => {
         currentImage < images.length - 1 && setCurrentImage(currentImage + 1)
        }}>
        <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
