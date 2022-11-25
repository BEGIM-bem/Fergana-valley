import React from 'react';
import aboutStyles from './../../Styles/About.module.scss'
import { imgPartnersLogo1, imgPartnersLogo2, imgPartnersLogo3, imgPartnersLogo4, imgPartnersLogo5 } from "../../images";
import {useSelector} from "react-redux";

const OurPartners = () => {

    const {language} = useSelector(state => state.localization)

    return (
        <div className='block_padding container1'>
            <h2 style={{ textAlign: 'start' }} className={aboutStyles.title}>
                {language === 'russian' && 'Наши партнеры'}
                {language === 'kyrgyz' && 'Биздин өнөктөштөр'}
                {language === "o'zbekcha" && "Bizning hamkorlarimiz"}
            </h2>
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
