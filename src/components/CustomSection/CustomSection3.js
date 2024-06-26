import React from 'react';
import css from './CustomSection3.module.css';

import img9 from '../../assets/img9.PNG';
import img10 from '../../assets/img10.PNG';
import img11 from '../../assets/img11.PNG';
import img12 from '../../assets/img12.PNG';
import img13 from '../../assets/img13.PNG';
import img14 from '../../assets/img14.PNG';
import img15 from '../../assets/img15.PNG';
import img16 from '../../assets/img16.PNG';
import img17 from '../../assets/img17.PNG';
import slidder from '../../assets/slidder2.PNG';
import left_arrow from '../../assets/left_arrow.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import right_arrow from '../../assets/right_arrow_trans.png';


const CustomSectionComponent3 = props =>{

    const {show} = props;

    const slide = show?css.show:"";
    

  return (
   
    <>
        <div className={classNames(css.container,css.show,css.desktop)}>
            <div className={classNames(css.h_abs_7, css.col_3)}>
                <div className={classNames(css.h_6, css.col_12)}>
                    <img src={img9} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>Tops</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
                <div className={classNames(css.h_4,css.subHeight_3, css.col_12)}>
                    <img src={img14} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>Sneakers</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
            </div>
            <div className={classNames(css.h_abs_7, css.col_3)}>
                <div className={classNames(css.h_7, css.col_12)}>
                    <img src={img10} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>Pants</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
                <div className={classNames(css.h_3,css.subHeight_1, css.col_12)}>
                    <img src={img15} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h3>Purse and Bags</h3></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
            </div>
            <div className={classNames(css.h_abs_7, css.col_3)}>
                <div className={classNames(css.h_5, css.col_12)}>
                    <img src={img11} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>Skirts</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
                <div className={classNames(css.h_5, css.col_12)}>
                    <img src={img16} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>T-Shirts</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
            </div>
            <div className={classNames(css.h_abs_7, css.col_3)}>
                <div className={classNames(css.h_6, css.col_12)}>
                    <img src={img13} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h3>Coats and Jackets</h3></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
                <div className={classNames(css.h_4,css.subHeight_2, css.col_12)}>
                    <img src={img17} className={css.resize}/>
                    <div className={css.overlay}>
                        <div><h2>Sweaters</h2></div>
                        <div><img className={classNames(css.carousel__btn)} src={right_arrow}/></div>
                    </div>
                </div>
            </div>
            

      </div>

      <div className={css.mobile}>
       
        <img src={img9} className={css.resize}/>
        <img src={img14} className={css.resize}/>
        <img src={img10} className={css.resize}/>
        <img src={img15} className={css.resize}/>
        <img src={img16} className={css.resize}/>
        <img src={img11} className={css.resize}/>
        <img src={img13} className={css.resize}/>
        <img src={img17} className={css.resize}/>
      </div>
    
   
    </>
   
  );
};


export default CustomSectionComponent3;
