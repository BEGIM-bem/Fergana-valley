import React from 'react';
import footerStyles from './Footer.module.scss'
import {iconFacbook, iconInstagram, iconTelegram, iconWatsap} from "../../images";
// import aboutStyles from './../../Styles/About.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={`${footerStyles.footer_cont} container`} >
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{ fontWeight: 700 }}>Навигация</p>
                    <p>О нас</p>
                    <p>Продукты и Услуги</p>
                    <p>Курс “Бизнес с 0”</p>
                    <p>Мероприятия</p>
                    <p>Контакты</p>
                </div>
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{ fontWeight: 700 }}>Контактная Информация</p>
                    <p>Кыргызстан</p>
                    <p>г.Ош ул.Ленина 121</p>
                    <p>Эл.почта: info@fergana.valley</p>
                    <p>Тел.: +996(779)119806</p>
                </div>
                <div className={`${footerStyles.icon_block} white_text`}>
                    <img src={iconInstagram} alt="/"/>
                    <img src={iconTelegram} alt="/"/>
                    <img src={iconFacbook} alt="/"/>
                    <img src={iconWatsap} alt="/"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
