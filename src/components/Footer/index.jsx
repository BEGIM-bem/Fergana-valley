import React from 'react';
import footerStyles from './Footer.module.scss'
// import aboutStyles from './../../Styles/About.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className='flex_between container'>
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{fontWeight: 700}}>Навигация</p>
                    <p>О нас</p>
                    <p>Продукты и Услуги</p>
                    <p>Курс “Бизнес с 0”</p>
                    <p>Мероприятия</p>
                    <p>Контакты</p>
                </div>
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{fontWeight: 700}}>Контактная Информация</p>
                    <p>Кыргызстан</p>
                    <p>г.Ош ул.Ленина 121</p>
                    <p>Эл.почта: info@fergana.valley</p>
                    <p>Тел.: +996(779)119806</p>
                </div>
                <div className={`${footerStyles.text_block} white_text`}>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
