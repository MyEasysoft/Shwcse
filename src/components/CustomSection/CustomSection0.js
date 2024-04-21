import React from 'react';
import css from './CustomSection0.module.css';

import banner_mobile from '../../assets/banner_mobile.png';
import w1 from '../../assets/banner.png';
import logo from '../../assets/shwcselogo.PNG';
import logo1 from '../../assets/logos/logo1.PNG';
import logo2 from '../../assets/logos/logo2.PNG';
import logo3 from '../../assets/logos/logo3.PNG';
import logo4 from '../../assets/logos/logo4.PNG';
import logo5 from '../../assets/logos/logo5.PNG';
import logo6 from '../../assets/logos/logo6.PNG';
import logo7 from '../../assets/logos/logo7.PNG';
import overlay_img from '../../assets/img_overlay.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import NamedLink from '../NamedLink/NamedLink';
import classNames from 'classnames';
import { constant } from 'lodash';
import CustomFooterComponent from './CustomFooter';


const CustomSectionComponent0 = props =>{
    const activeClassName = 'my-active-class';
    const {blocks} = props;
    // const content = blocks[0].text.content;
    // const title = blocks[0].title;

    let title = "";
    let callToActionText = "";
    if(blocks.length === 0){
        title = props.title.content;
        callToActionText = props.callToAction.content;
    }

    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

    const view = blocks.length !== 0?
    
      <CustomFooterComponent/>
    
    : <>

        <section>
            <div className={classNames(css.full_width , css.desktop)}>
                    <div className={css.container +' '+ css.textCenter}>
                    <div>
                        <img className={css.resize} src={w1} />
                        <img className={css.resize_overlay} src={overlay_img} />
                        <NamedLink {...landingPageProps} ><img className={css.logo} src={logo}/></NamedLink>
                            

                            <div className={classNames(css.nav_menu)}>
                                <NamedLink {...landingPageProps}>Home</NamedLink>
                                <NamedLink {...landingPageProps}>About</NamedLink>
                                <NamedLink {...landingPageProps}>Locations</NamedLink>
                                <NamedLink {...landingPageProps}>Categories</NamedLink>
                                <NamedLink {...landingPageProps}>Contact Us</NamedLink>
                            </div>
                            <div className={css.login_btn_div}>
                                <NamedLink {...landingPageProps} className={css.login_btn}>Login</NamedLink>
                            </div>

                            <div className={css.hero}>

                                <div className={css.caption}>
                                    <h3>
                                        EXPLORE THE NEWEST TRENDS AND EVERYTHING 
                                        IN BETWEEN. ELEVATE BOTH YOUR WARDROBE
                                        AND YOUR CONFIDENCE WITH OUR CURATED COLLECTIONS
                                    </h3>
                                </div>

                                <div className={css.action_btn_div}>
                                        <NamedLink {...landingPageProps} className={css.action_btn2}>Discover Brands</NamedLink>
                                </div>
                                
                            </div>
                          

                    </div>

                </div>
               
                <div className={css.container_partners}>
                    
                        <div className="slide"><img src={logo1}/></div>
                        <div className="slide"><img src={logo2}/></div>
                        <div className="slide"><img src={logo3}/></div>
                        <div className="slide"><img src={logo4}/></div>
                        <div className="slide"><img src={logo5}/></div>
                        <div className="slide"><img src={logo6}/></div>
                        <div className="slide"><img src={logo7}/></div>
                
                </div>
            </div>

            <div className={css.mobile}>
                <img className={css.resize} src={banner_mobile} />

                <div className={classNames(css.mag_y_50 , css.pad_50)}>
                    <h2>
                        EXPLORE THE NEWEST TRENDS AND EVERYTHING IN BETWEEN. ELEVATE BOTH YOUR WARDROBE AND YOUR CONFIDENCE WITH OUR CURATED COLLECTIONS
                    </h2>
                </div>
            
                <div className={css.action_btn_div}>
                    <NamedLink {...landingPageProps} className={css.action_btn2}>{callToActionText}</NamedLink>
                </div>

               
            
            </div>
        </section>
        
    </>
   
    
    
  return (
   
    <>

    {view}
   
    </>
    

    

   
  );
};


export default CustomSectionComponent0;
