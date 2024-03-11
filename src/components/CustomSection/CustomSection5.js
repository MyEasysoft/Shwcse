import React from 'react';
import css from './CustomSection5.module.css';

import img9 from '../../assets/img9.PNG';
import img10 from '../../assets/img10.PNG';
import img11 from '../../assets/img11.PNG';
import img12 from '../../assets/img12.PNG';
import img13 from '../../assets/img13.PNG';
import img14 from '../../assets/img14.PNG';
import img15 from '../../assets/img15.PNG';
import img20 from '../../assets/img20.PNG';
import img19 from '../../assets/img19.PNG';
import slidder from '../../assets/slidder.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


const CustomSectionComponent5 = props =>{

    const activeClassName = 'my-active-class';
    
    // const {sectionName, description,blocks} = props;
    // const content = blocks[0].text.content;
    // const title = blocks[0].title;

    
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

  return (
   
    <>

      <div className={classNames(css.container,css.desktop)}>
           <div>
                <img src={img19}/>
           </div>
            <div className={classNames(css.col_12, css.flex_col,css.pad_50)}>
                    <div className={css.text_center}><h2 className={classNames(css.font_wg_200,css.letter_space_10,css.text_50)}>Join our Newsletter</h2></div>
                    
                    <p className={classNames(css.text_30,css.mag_y_50)}>
                    Subscribe to receive the latest updates on promos, discount offers and new products. Please center this. Put everything on one line or put have it to where promo's, discount offers and products are centered underneath Subscribe to receive the latest updates on
                    </p>
                    <div className={css.flex_row_2}>
                        <input className={classNames(css.no_bg_input,css.col_10,css.text_30)} type="email" placeholder="Enter Email address"/>
                        <NamedLink {...landingPageProps} className={css.login_btn}>Subscribe</NamedLink>
            
                    </div>
                    
                
           </div>
           <div className={css.mag_t}>
                <img src={img20}/>
           </div>
      </div>

      <div className={css.mobile}>
         
                <img className={css.resize} src={img19}/>
          
           
                    <div className={css.text_center}><h3 className={classNames(css.font_wg_200,css.letter_space_10,css.text_50)}>Join our Newsletter</h3></div>
                    
                    <p className={classNames(css.text_30,css.mag_y_50)}>
                    Subscribe to receive the latest updates on promos, discount offers and new products. Please center this. Put everything on one line or put have it to where promo's, discount offers and products are centered underneath Subscribe to receive the latest updates on
                    </p>
                    
                        <input className={classNames(css.no_bg_input,css.text_30)} type="email" placeholder="Enter Email address"/>
                        <NamedLink {...landingPageProps} className={css.login_btn}>Subscribe</NamedLink>
            
                  
                    
                
           
           <div className={css.mag_t}>
                <img src={img20}/>
           </div>
      </div>
    </>
  );
};


export default CustomSectionComponent5;
