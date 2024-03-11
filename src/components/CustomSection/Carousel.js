// src/Carousel.js

import React, { useEffect, useState } from 'react';
import css from './Carousel.module.css';
import classNames from 'classnames';
import CustomSectionComponent3 from './CustomSection3';
import CustomSectionComponent3b from './CustomSection3b';
import CustomSectionComponent3c from './CustomSection3C';
import slidder from '../../assets/slidder2.PNG';
import left_arrow from '../../assets/left_arrow.PNG';
import right_arrow from '../../assets/right_arrow2.PNG';

const Carousel = () => {



  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);


  useEffect(()=>{
    const slide1 = setActiveIndex === 0?<CustomSectionComponent3 show={true}/>:<CustomSectionComponent3/>;
    const slide2 = setActiveIndex === 1?<CustomSectionComponent3b show={true}/>:<CustomSectionComponent3b/>;
    const slide3 = setActiveIndex === 2?<CustomSectionComponent3c show={true}/>:<CustomSectionComponent3c/>;

    setImages([slide1,
                slide2,
                slide3,])
    
  },[]);
  
  

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
    <div className={classNames(css.carousel)}>
      <div className={classNames(css.pad5,css.mobile)}>

            <h1 className={css.big_h}>
              Categories
            </h1>
            <img className={css.h_20}  src={slidder}/>
            <div className={css.control}>
                    <img onClick={prevSlide} className={classNames(css.carousel__btn,css.carousel__btn__prev,css.mag_r_50)}  src={left_arrow}/>
                    <img onClick={nextSlide} className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
            </div>

        </div>
        <div className={classNames(css.flex_row_bet,css.desktop)}>
            <div className={css.flex_row_normal}>
                <h1 className={classNames( css.why_showcase, css.text_no_wrap)}>
                    Categories
                </h1>
                <img className={css.margin_top_small} src={slidder}/>
            </div>
            <div>
                    <img onClick={prevSlide} className={classNames(css.carousel__btn,css.carousel__btn__prev,css.mag_r_50)}  src={left_arrow}/>
                    <img onClick={nextSlide} className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
            </div>
        </div>
       {images[activeIndex]}
    </div>


</>
  );
};
export default Carousel;