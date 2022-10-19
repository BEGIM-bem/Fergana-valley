import React from 'react';
import aboutStyles from './../../Styles/About.module.scss'
import {imgPartnersLogo1, imgPartnersLogo2, imgPartnersLogo3, imgPartnersLogo4, imgPartnersLogo5} from "../../images";

const OurPartners = () => {
    return (
        <div className='block_padding container'>
            <h2 style={{textAlign: 'start'}} className={aboutStyles.title}>Наши партнеры</h2>
            <div style={{padding: '130px 0 66px'}} className='flex_between'>
                <img src={imgPartnersLogo1} alt="/" />
                <img src={imgPartnersLogo2} alt="/" />
                <img src={imgPartnersLogo3} alt="/" />
                <img src={imgPartnersLogo4} alt="/" />
                <img src={imgPartnersLogo5} alt="/" />
            </div>
        </div>
    );
};

export default OurPartners;
