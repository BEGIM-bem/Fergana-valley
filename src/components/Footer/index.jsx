import React, { useEffect } from 'react';
import footerStyles from './Footer.module.scss'
import { iconFacbook, iconInstagram, iconTelegram, iconWatsap } from "../../images";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/Cookies";
import { getAddress } from "../../api/course";
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
                    <p>
                        {language === 'russian' && 'О нас'}
                        {language === 'kyrgyz' && 'Биз жөнүндө'}
                        {language === "o'zbekcha" && 'Biz haqimizda'}
                    </p>
                    <p>
                        {language === 'russian' && 'Продукты и Услуги'}
                        {language === 'kyrgyz' && 'Продукциялар жана кызматтар'}
                        {language === "o'zbekcha" && 'Mahsulotlar va xizmatlar'}
                    </p>
                    <p>
                        {language === 'russian' && ' Курс “Бизнес с 0” '}
                        {language === 'kyrgyz' && '"Бизнес 0дөн" курсу'}
                        {language === "o'zbekcha" && '“Biznes 0 dan” kursi'}
                    </p>
                    <p>
                        {language === 'russian' && 'Новости'}
                        {language === 'kyrgyz' && 'Жаңылыктар'}
                        {language === "o'zbekcha" && 'Yangiliklar'}
                    </p>
                    <p>
                        {language === 'russian' && 'Контакты'}
                        {language === 'kyrgyz' && 'Байланыштар'}
                        {language === "o'zbekcha" && 'Kontaktlar'}
                    </p>
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
