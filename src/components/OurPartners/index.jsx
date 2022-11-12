import React from 'react';
import aboutStyles from './../../Styles/About.module.scss'
import { imgPartnersLogo1, imgPartnersLogo2, imgPartnersLogo3, imgPartnersLogo4, imgPartnersLogo5 } from "../../images";

const OurPartners = () => {
    return (
        <div className='block_padding container1'>
            <h2 style={{ textAlign: 'start' }} className={aboutStyles.title}>Наши партнеры</h2>
            <div className={`${aboutStyles.icons_cont} flex_between`}>
                <img className={aboutStyles.partner_logo} src={imgPartnersLogo1} alt="/" />
                <img className={aboutStyles.partner_logo} src={imgPartnersLogo2} alt="/" />
                <img className={aboutStyles.partner_logo} src={imgPartnersLogo3} alt="/" />
                <img className={aboutStyles.img_none} src={imgPartnersLogo4} alt="/" />
                <img className={aboutStyles.img_none} src={imgPartnersLogo5} alt="/" />
            </div>
        </div>
    );
};

export default OurPartners;
