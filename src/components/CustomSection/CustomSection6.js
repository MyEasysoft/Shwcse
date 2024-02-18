import React from 'react';
import css from './CustomSection6.module.css';

import shwcse from '../../assets/SHWCSE.png';
import slidder from '../../assets/slidder.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import NamedLink from '../NamedLink/NamedLink';


const CustomSectionComponent6 = props =>{

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
                <img className={css.resize} src={shwcse}/>
           </div>
           
      </div>

      <div className={css.mobile}>
          <img className={css.resize} src={shwcse}/>
      </div>
    </>
  );
};


export default CustomSectionComponent6;
