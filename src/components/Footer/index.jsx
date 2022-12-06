import React, { useEffect } from 'react';
import footerStyles from './Footer.module.scss'
import { iconFacbook, iconInstagram, iconTelegram, iconWatsap } from "../../images";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/Cookies";
import { getAddress } from "../../api/course";
import {NavLink} from "react-router-dom";
// import aboutStyles from './../../Styles/About.module.scss'

const Footer = () => {

    const { LinkSocialNetwork, contacts } = useSelector(state => state.contacts)

    // const { contacts } = useSelector(state => state.contacts)

    // const { address } = useSelector(state => state.course)
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.localization)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getAddress())
    }, [])

    return (
        <div className={footerStyles.footer}>
            <div className={`${footerStyles.footer_cont} container1`} >
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{ fontWeight: 700 }}>
                        {language === 'russian' && 'Навигация'}
                        {language === 'kyrgyz' && 'Навигация'}
                        {language === "o'zbekcha" && "Navigatsiya"}
                    </p>
                    <NavLink to={'/about'}>
                        <p className={footerStyles.nav_text}>
                            {language === 'russian' && 'О нас'}
                            {language === 'kyrgyz' && 'Биз жөнүндө'}
                            {language === "o'zbekcha" && 'Biz haqimizda'}
                        </p>
                    </NavLink>
                    <NavLink to={'/products_services'}>
                        <p className={footerStyles.nav_text}>
                            {language === 'russian' && 'Продукты и Услуги'}
                            {language === 'kyrgyz' && 'Продукциялар жана кызматтар'}
                            {language === "o'zbekcha" && 'Mahsulotlar va xizmatlar'}
                        </p>
                    </NavLink>
                    <NavLink to={'/course'}>
                        <p className={footerStyles.nav_text}>
                            {language === 'russian' && ' Курс “Бизнес с 0” '}
                            {language === 'kyrgyz' && '"Бизнес 0дөн" курсу'}
                            {language === "o'zbekcha" && '“Biznes 0 dan” kursi'}
                        </p>
                    </NavLink>
                    <NavLink to={'/events'}>
                        <p className={footerStyles.nav_text}>
                            {language === 'russian' && 'Новости'}
                            {language === 'kyrgyz' && 'Жаңылыктар'}
                            {language === "o'zbekcha" && 'Yangiliklar'}
                        </p>
                    </NavLink>
                    <NavLink to={'/contacts'}>
                        <p className={footerStyles.nav_text}>
                            {language === 'russian' && 'Контакты'}
                            {language === 'kyrgyz' && 'Байланыштар'}
                            {language === "o'zbekcha" && 'Kontaktlar'}
                        </p>
                    </NavLink>

                </div>
                <div className={`${footerStyles.text_block} white_text`}>
                    <p style={{ fontWeight: 700 }}>
                        {language === 'russian' && 'Контактная Информация'}
                        {language === 'kyrgyz' && 'Байланыш маалымат'}
                        {language === "o'zbekcha" && "Bog'lanish uchun ma'lumot"}
                    </p>
                    {contacts.map(i => {
                        return <>
                            <p>
                                {language === 'russian' && i?.city_country_ru}
                                {language === 'kyrgyz' && i?.city_country_kg}
                                {language === "o'zbekcha" && i?.city_country_uz}
                            </p>
                            <p>
                                {language === 'russian' && i?.street_ru}
                                {language === 'kyrgyz' && i?.street_kg}
                                {language === "o'zbekcha" && i?.street_uz}
                            </p>
                            <p>{i.email}</p>
                            <p>{language === 'russian' && 'Тел.'}
                                {language === 'kyrgyz' && 'Тел.'}
                                {language === "o'zbekcha" && 'Tel.'}: {i.phone_number}</p>
                        </>
                    })}

                </div>
                <div className={`${footerStyles.icon_block} white_text`}>
                    {LinkSocialNetwork.map((item, index) => {
                        return (
                            // <div key={item.id} className='conteiner__icon'>
                            <a href={item.link} target='_blank' rel='noreferrer'>
                                <img src={item.logo} alt='not find icon' />
                            </a>
                            //</div>
                        )
                    })}
                    {/*<img src={iconInstagram} alt="/" />*/}
                    {/*<img src={iconTelegram} alt="/" />*/}
                    {/*<img src={iconFacbook} alt="/" />*/}
                    {/*<img src={iconWatsap} alt="/" />*/}
                </div>
            </div>
        </div>
    );
};

export default Footer;
