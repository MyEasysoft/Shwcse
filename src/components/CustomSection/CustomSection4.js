import React from 'react';
import css from './CustomSection4.module.css';

import img9 from '../../assets/img9.PNG';
import img10 from '../../assets/img10.PNG';
import img11 from '../../assets/img11.PNG';
import img12 from '../../assets/img12.PNG';
import img13 from '../../assets/img13.PNG';
import img14 from '../../assets/img14.PNG';
import img15 from '../../assets/img15.PNG';
import img16 from '../../assets/img16.PNG';
import img18 from '../../assets/img18.PNG';
import slidder from '../../assets/slidder.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


const CustomSectionComponent4 = props =>{

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
           <div className={css.col_6}>
                <img className={css.resize_2} src={img18}/>
           </div>
            <div className={classNames(css.col_6, css.flex_col,css.pad_50)}>
                
                    <h3 className={classNames(css.font_wg_200,css.letter_space_10)}>YOUR FASHIONMARKET PLACE</h3>
                    <p className={classNames(css.mag_y_50,css.text_white,css.p2)}>
                        Shwcse is making it easier for merchants to market and sell 
                        while consumers shop and purchase
                    </p>
                    <NamedLink {...landingPageProps} className={css.login_btn}>Start Shopping</NamedLink>
            
                
           </div>
      </div>

      <div className={css.mobile}>
        
         
                <img className={css.resize} src={img18}/>
         
            
                    <h3 className={classNames(css.font_wg_200,css.letter_space_10)}>YOUR FASHIONMARKET PLACE</h3>
                    <p className={classNames(css.text_30,css.mag_y_50,css.text_white)}>
                        Shwcse is making it easier for merchants to market and sell 
                        while consumers shop and purchase
                    </p>
                    <NamedLink {...landingPageProps} className={css.login_btn}>Start Shopping</NamedLink>
            
           
      </div>

      
    </>
  );
};


export default CustomSectionComponent4;
