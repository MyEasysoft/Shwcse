import React from 'react';
import css from './CustomSection1.module.css';
import img1 from '../../assets/img1.PNG';
import img2 from '../../assets/img2.PNG';
import arrow1 from '../../assets/right_arrow.PNG';
import slidder2 from '../../assets/slidder2.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


function CustomSectionComponent1(){
    const activeClassName = 'my-active-class';
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };


  return (



    <>
        <div className={css.slidder1}>
            <h3 className={classNames( css.why_showcase)}>
                Why Shwcse?
            </h3>
            <img className={css.slidder2} src={slidder2}/>
        </div>
        <div className={classNames(css.main_container,css.desktop)} >
            
                    
            <div className={css.col_6}>
                <div className={css.first_div}>
                        <div className={classNames(css.col12,css.border_radius_50,css.bg_light_gray) }>
                            <img className={classNames(css.height_100, css.border_radius_top_50, css.img_fluid) } src={img1}/>

                            <div className={classNames(css.margin_50,css.color_black)}>
                                <h2>
                                    Shwcse your brand
                                </h2>
                                <p className={classNames(css.color_black)}>
                                    Join us as we welcome a growing lineup of top-tier 
                                    brands, offering you the latest trends and styles like 
                                    never before.<br/>
                                </p>
                            </div>
                            
                        </div>
                    
                </div>
            </div>
            <div className={css.col_6} >

                <div className={css.top_div}>
                    <div className={classNames(css.border_radius_50, css.flex_row_full,css.bg_light_gray)}>
                        
                        <img className={classNames( css.img_medium) } src={img2}/>
                        <div className={classNames(css.margin_50,css.color_black)}>
                            <h2>
                                Secured Payment
                            </h2>
                            <p className={classNames(css.color_black)}>
                            
                                You can pay using a debit or credit 
                                card, and the marketplace will securely 
                                hold your funds until you've received 
                                the purchased item or service.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className={css.bot_div}>
                    <div className={classNames( css.flex_row_full,css.border_radius_50,css.bg_light_green)}>
                            <div className={classNames(css.margin_30,css.color_white)}>
                            <h2>
                                Find What You Need
                            </h2>
                                    <p className={classNames(css.color_white)}>
                                        Search by location or keyword. Filter by price, 
                                        availability, or custom filters. View retail brands 
                                        and listing details.
                                    </p>
                            </div>
                            <div>
                                <NamedLink {...landingPageProps} ><img className={classNames(css.resize_5,css.link_btns,css.margin_right_50,css.arrow_icon)} src={arrow1}/></NamedLink>
                            </div>
                    </div>
                </div>
                
            </div>

        </div>
        

            <div className={css.mobile}>
                    <h1 className={classNames( css.why_showcase)}>
                        Why Shwcse?
                    </h1>
                    <img className={css.slidder2}  src={slidder2}/>

                    <div className={classNames(css.col12,css.border_radius_20,css.bg_light_gray) }>
                        <img className={classNames(css.height_100, css.border_radius_top_20, css.img_fluid) } src={img1}/>

                        <div className={classNames(css.margin_50,css.color_black)}>
                            <h2 className={css.display_block}>
                                Shwcse your brand
                            </h2>
                            <p className={classNames(css.color_black)}>
                                Join us as we welcome a growing lineup of top-tier <br/>
                                brands, offering you the latest trends and styles like <br/>
                                never before.
                            </p>
                        </div>
                        
                    </div>

                
            
            </div>

            <div className={css.mobile}>

                <div className={classNames(css.border_radius_50,css.bg_light_gray)}>
                        
                        <img className={classNames( css.img_medium,css.border_radius_50) } src={img2}/>
                        <div className={classNames(css.margin_50,css.color_black)}>
                            <h1>
                                Secured Payment
                            </h1>
                            <p className={classNames(css.color_black, css.mag_b_20)}>
                            
                                You can pay using a debit or credit 
                                card, and the marketplace will securely 
                                hold your funds until you've received 
                                the purchased item or service.
                                
                            </p>
                        </div>
                        
                    </div>
            </div>

            <div className={css.mobile}>
                <div className={classNames( css.border_radius_50,css.bg_light_green,css.pad_t_50)}>
                    <div className={classNames(css.margin_40,css.color_white )}>
                            <h1  className={css.smallHeader}>
                                Find What You Need
                            </h1>
                            <p className={classNames(css.color_white)}>
                                Search by location or keyword. Filter by price, <br/>
                                availability, or custom filters. View retail brands <br/>
                                and listing details.
                            </p>
                    </div>
                    <div>
                       <NamedLink {...landingPageProps} ><img className={classNames(css.resize_5,css.link_btns)} src={arrow1}/></NamedLink>
                    </div>
                </div>
            </div>
        
    </>

    
       
    

    
  );
};


export default CustomSectionComponent1;
