import React from 'react';
import css from './CustomSection1.module.css';
import img1 from '../../assets/img1.PNG';
import img2 from '../../assets/img2.PNG';
import arrow1 from '../../assets/right_arrow.PNG';
import slidder2 from '../../assets/slidder2.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';


function CustomSectionComponent1(){

  return (



    <>
    <div className={classNames(css.main_container,css.desktop)} >

        <div className={css.flex_row_normal}>
            <h1 className={classNames( css.why_showcase, css.text_no_wrap)}>
                Why Shwcse?
            </h1>

            
            <img className={css.margin_top_small} src={slidder2}/>
            

        </div>
         
        <div className={css.container_ } >
		<div className={css.col6}>
            <div className={classNames(css.col12,css.border_radius_50,css.bg_light_gray) }>
                <img className={classNames(css.height_100, css.border_radius_top_50, css.img_fluid) } src={img1}/>

                <div className={classNames(css.margin_50,css.color_black)}>
                    <h2>
                        Shwcse your brand
                    </h2>
                    <p className={classNames(css.text_size_30,css.color_black)}>
                        Join us as we welcome a growing lineup of top-tier 
                        brands, offering you the latest trends and styles like 
                        never before.
                    </p>
                </div>
                
            </div>
           
        </div>
        <div className={css.col6}>
            <div className={classNames(css.col12) }>

                <div className={classNames(css.border_radius_50, css.flex_row_full,css.bg_light_gray)}>
                
                    <img className={classNames( css.img_medium) } src={img2}/>
                    <div className={classNames(css.margin_50,css.color_black)}>
                        <h2>
                            Secured Payment
                        </h2>
                        <p className={classNames(css.text_size_20,css.color_black)}>
                        
                            You can pay using a debit or credit 
                            card, and the marketplace will securely 
                            hold your funds until you've received 
                            the purchased item or service.
                        </p>
                    </div>
                    
                </div>
                    

                <div className={classNames( css.flex_row_full,css.border_radius_50,css.bg_light_green,css.margin_top_20)}>
                    <div className={classNames(css.margin_40,css.color_white)}>
                            <h2>
                                Find What you need
                            </h2>
                            <p className={classNames(css.text_size_20,css.color_white)}>
                                Search by location or keyword. Filter by price, 
                                availability, or custom filters. View retail brands 
                                and listing details.
                            </p>
                    </div>
                    <div>
                        <img src={arrow1} className={css.margin_right_50} />
                    </div>
                </div>
                    
                </div>
                
                
        </div>
	</div>
    </div>

    <div className={css.mobile}>
            <h3 className={classNames( css.why_showcase)}>
                Why Shwcse?
            </h3>
            <img  src={slidder2}/>

            <div className={classNames(css.col12,css.border_radius_20,css.bg_light_gray) }>
                <img className={classNames(css.height_100, css.border_radius_top_20, css.img_fluid) } src={img1}/>

                <div className={classNames(css.margin_50,css.color_black)}>
                    <h2 className={css.display_block}>
                        Shwcse your brand
                    </h2>
                    <p className={classNames(css.text_size_30,css.color_black)}>
                        Join us as we welcome a growing lineup of top-tier 
                        brands, offering you the latest trends and styles like 
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
                    <p className={classNames(css.text_size_20,css.color_black, css.mag_b_20)}>
                    
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
                    <h1>
                        Find What you need
                    </h1>
                    <p className={classNames(css.text_size_20,css.color_white)}>
                        Search by location or keyword. Filter by price, 
                        availability, or custom filters. View retail brands 
                        and listing details.
                    </p>
            </div>
            <div>
                <img src={arrow1}/>
            </div>
        </div>
     </div>
        
    </>

    
       
    

    
  );
};


export default CustomSectionComponent1;
