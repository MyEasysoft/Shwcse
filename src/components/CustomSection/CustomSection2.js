import React from 'react';
import css from './CustomSection2.module.css';

import img3 from '../../assets/img3.PNG';
import img4 from '../../assets/img4.PNG';
import img5 from '../../assets/img5.PNG';
import img6 from '../../assets/img6.PNG';
import img7 from '../../assets/img7.PNG';
import img8 from '../../assets/img8.PNG';
import slidder from '../../assets/slidder.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import right_arrow from '../../assets/right_arrow_trans.png';


const CustomSectionComponent2 = props =>{

    // const {sectionName, description,blocks} = props;
    // const content = blocks[0].text.content;
    // const title = blocks[0].title;

  return (
   
    <>

      <div className={classNames(css.container, css.desktop)}>

        <div className={css.flex_row_normal}>
            <img className={css.margin_top_small} src={slidder}/>
            <h1 className={classNames( css.show, css.text_no_wrap)}>
              Locations?
            </h1>
            
        </div>

        <div>
          <div className={css.col45}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img3}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={css.col20}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img4}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={css.col35}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img5}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
        </div>

      </div>

      <div className={classNames(css.container, css.desktop)}>
        <div>
          <div className={css.col20}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img6}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={css.col35}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img7}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={css.col45}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img8}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
        </div>

      </div>

      <div className={classNames(css.mobile,css.mag_t_50)}>
            <h1>
                Locations?
            </h1>
            <img className={css.h_20}  src={slidder}/>
          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img3}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img4}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img5}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>

          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img6}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img7}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>
          <div className={classNames(css.img_con)}>
            <img className={classNames(css.loca_bg,css.resize_image)} src={img8}/>
            <img className={classNames(css.carousel__btn,css.carousel__btn__prev)} src={right_arrow}/>
          </div>


      </div>


    
   
    </>
    

    

   
  );
};


export default CustomSectionComponent2;
