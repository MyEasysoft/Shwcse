import React from 'react';
import css from './CustomFooter.module.css';

import logomain from '../../assets/logomain.PNG';
import googleplay from '../../assets/googleplay.PNG';
import appstore from '../../assets/appstore.PNG';
import slidder from '../../assets/slidder.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';
import UncontrolledCarouselComponent from './Carousel';
import Carousel from './Carousel';
import img9 from '../../assets/img9.PNG';
import img10 from '../../assets/img10.PNG';
import img11 from '../../assets/img11.PNG';
import ExternalLink from '../ExternalLink/ExternalLink';



const CustomFooterComponent = props =>{

    const activeClassName = 'my-active-class';
   
    const landingPageProps = {
        name: 'LandingPage',
        activeClassName,
        match: { url: '/' },
      };

      const images = [
        img9,
       img10,
        img11,
      ];

  return (
    <>
      <footer className={css.desktop}>

        <div className={classNames(css.container,css.flex_row)}>
            <div className={classNames(css.flex_col,css.col_4,css.mag_r)}>
                    <img className={css.resize_logo} src={logomain}/>
                    <p className={css.text_p}>
                        We foster distinctive fashion in your 
                        life via Quality Fashion, Artistic 
                        Expression, and Endless Innovation.
                        Our retail marketplace serves as a 
                        global hub where consumers and 
                        brands unite under one roof
                    </p>
            </div> 
            <div className={classNames(css.flex_row, css.col_8,css.text_p)}>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Categories</span>
                    <NamedLink {...landingPageProps} > Tops Pants</NamedLink>
                    <NamedLink {...landingPageProps} >Skirts</NamedLink>
                    <NamedLink {...landingPageProps} >Coats & Jackets</NamedLink>
                    <NamedLink {...landingPageProps} >Purses & Bags</NamedLink>
                    <NamedLink {...landingPageProps} >T-shirts</NamedLink>
                    <NamedLink {...landingPageProps} >Sweaters</NamedLink>

                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Locations</span>
                    <NamedLink {...landingPageProps} > New York</NamedLink>
                    <NamedLink {...landingPageProps} >Atalanta</NamedLink>
                    <NamedLink {...landingPageProps} >Los Angeles</NamedLink>
                    <NamedLink {...landingPageProps} >Miami</NamedLink>
                    <NamedLink {...landingPageProps} >Houston</NamedLink>
                    <NamedLink {...landingPageProps} >Las Vegas</NamedLink>
                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Quick Links</span>
                    <NamedLink {...landingPageProps} >About</NamedLink>
                    <NamedLink {...landingPageProps} >Sell On Shwcse</NamedLink>
                    <NamedLink {...landingPageProps} >Terms</NamedLink>
                    <NamedLink {...landingPageProps} >Privacy</NamedLink>
                    <NamedLink {...landingPageProps} >Support</NamedLink>
                  
                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Connect With Us</span>
                    <ExternalLink href="https://shwcse-workspace.slack.com" className={css.login_btn_2}>Join Us on Slack</ExternalLink>
                </div>
            </div>
           
        </div>

        <div>

            <p className={classNames(css.text_p,css.text_center)}>
                &copy;
                All rights reserved Shwcse Technologies Inc.
            </p>

            <br/>

            <p className={classNames(css.text_p,css.text_center)}>
                Please note that we do not hold ownership rights to any of the major retail brands featured on our marketplace
            </p>

            <div className={css.mag_y_30}>
                <NamedLink {...landingPageProps} className={css.socia_btn}>Instagram</NamedLink>
                <NamedLink {...landingPageProps} className={css.socia_btn}>LinkedIn</NamedLink>
                <NamedLink {...landingPageProps} className={css.socia_btn}>Facebook</NamedLink>
                <NamedLink {...landingPageProps} className={classNames(css.socia_btn,css.btn_pad)}>X</NamedLink>
            </div>

        </div>

      
           
      </footer>

      <footer className={css.mobile}>
            <img className={css.resize} src={logomain}/>
            <p className={css.text_p}>
                We foster distinctive fashion in your 
                life via Quality Fashion, Artistic 
                Expression, and Endless Innovation.
                Our retail marketplace serves as a 
                global hub where consumers and 
                brands unite under one roof
            </p>

             <div className={classNames(css.flex_col)}><span className={css.headers}>Categories</span>
                    <NamedLink {...landingPageProps} > Tops Pants</NamedLink>
                    <NamedLink {...landingPageProps} >Skirts</NamedLink>
                    <NamedLink {...landingPageProps} >Coats & Jackets</NamedLink>
                    <NamedLink {...landingPageProps} >Purses & Bags</NamedLink>
                    <NamedLink {...landingPageProps} >T-shirts</NamedLink>
                    <NamedLink {...landingPageProps} >Sweaters</NamedLink>

                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Locations</span>
                    <NamedLink {...landingPageProps} > New York</NamedLink>
                    <NamedLink {...landingPageProps} >Atalanta</NamedLink>
                    <NamedLink {...landingPageProps} >Los Angeles</NamedLink>
                    <NamedLink {...landingPageProps} >Miami</NamedLink>
                    <NamedLink {...landingPageProps} >Houston</NamedLink>
                    <NamedLink {...landingPageProps} >Las Vegas</NamedLink>
                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Quick Links</span>
                    <NamedLink {...landingPageProps} >About</NamedLink>
                    <NamedLink {...landingPageProps} >Sell On Shwcse</NamedLink>
                    <NamedLink {...landingPageProps} >Terms</NamedLink>
                    <NamedLink {...landingPageProps} >Privacy</NamedLink>
                    <NamedLink {...landingPageProps} >Support</NamedLink>
                  
                </div>
                <div className={classNames(css.flex_col)}><span className={css.headers}>Connect With Us</span>
                    <ExternalLink href="https://shwcse-workspace.slack.com" className={css.login_btn_2}>Join Us on Slack</ExternalLink>
                </div>
      </footer>

     
     
    </>
  );
};

export default CustomFooterComponent;
