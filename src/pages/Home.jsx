import React, { useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from '../Styles/Home.module.scss'
import {
    mainAboutImg,
    blokMain1,
    blokMain2,
    blockMain3,
    blockMain4,
    adaptivProductImg,
    aboutImagess,
    imgAbout2
} from '../images/index.js'
import Slider from '../components/Slider/Slider';
import Button from '../components/Button';
import Cards from '../components/Cards';
import aboutStyles from '../Styles/About.module.scss'
import OurPartners from '../components/OurPartners';
import Founders from '../components/Founders';
import NewsConteiner from '../components/NewsConteiner';
import Footer from '../components/Footer/index.jsx'
import SliderAdaptability from '../components/ConteinerAdaptability';
import { useDispatch, useSelector } from 'react-redux';
import { getFounders } from "../api/user";
import useWindowDimensions from './with';
import { useState } from 'react';
import { sliderADImageProductKG, sliderADImageProductOZ, sliderADImageProductRU, sliderImageProductKG, sliderImageProductOZ, sliderImageProductRus } from './InfoProducts.js'
import AdaptivMainProduct from '../components/ConteinerAdaptability/ProductMain';
import { getCookie } from "../utils/Cookies";


export default function Home() {




    const { height, width } = useWindowDimensions();


    const { allEvents, status, error } = useSelector(state => state.events)
    const { LinkSocialNetwork } = useSelector(state => state.contacts)
    const { language } = useSelector(state => state.localization)

    let sliceEvent = allEvents.slice(0, 2)

    let WatsapLink = LinkSocialNetwork[1]?.link


    const [changeLangues, setChangeLangues] = useState()
    const [adaptivChangeLangues, setAdaptivChangeLangues] = useState()

    useEffect(() => {
        console.log(changeLangues)
        if (language === 'russian') {
            setChangeLangues(sliderImageProductRus)
        }
        else if (language === "o'zbekcha") {
            setChangeLangues(sliderImageProductOZ)
        }
        else if (language === 'kyrgyz') {
            setChangeLangues(sliderImageProductKG)
        }

        if (language === 'russian') {
            setAdaptivChangeLangues(sliderADImageProductRU)
        }
        else if (language === "o'zbekcha") {
            setAdaptivChangeLangues(sliderADImageProductOZ)
        }
        else if (language === 'kyrgyz') {
            setAdaptivChangeLangues(sliderADImageProductKG)
        }



    }, [language, changeLangues])

    console.log("changeLangues: ", changeLangues)

    const mainb = `${language === 'russian' ? 'Главное действие' : ''}
                            ${language === 'kyrgyz' ? 'Негизги аракет' : ""}
                            ${language === "o'zbekcha" ? "Asosiy harakat" : ''}`

    const moreb = `${language === 'russian' ? 'Подробнее' : ''}
                            ${language === 'kyrgyz' ? 'Kөбүрөөк' : ""}
                            ${language === "o'zbekcha" ? "Ko'proq" : ''}`
    const newsb = `${language === 'russian' ? 'Все новости' : ''}
                            ${language === 'kyrgyz' ? 'Бардык жаңылыктар' : ""}
                            ${language === "o'zbekcha" ? "Barcha yangiliklar" : ''}`




    return (
        <div >

            <Slider />

            <div className={`${styles.allAbouts} ${aboutStyles.desc_cont} container1`} >

                <div className={styles.about__contents}>

                    <h1 className={styles.about__content_title}>
                        {language === 'russian' && 'Кто мы?'}
                        {language === 'kyrgyz' && 'Биз кимбиз?'}
                        {language === "o'zbekcha" && "Biz kimmiz?"}
                    </h1>
                    <br />
                    {language === 'russian' && (
                        <p className={aboutStyles.text}>

                            Общество с Ограниченной Ответственностью  «Академия Бизнеса Ферганской Долины» создано для развития, поддержки и продвижения предпринимательства в Ферганской Долине.<br /><br />
                            Наша главная цель - помочь предпринимателям Ферганской Долины реализовать свои идеи и замыслы и достичь результата.
                            <br /><br />
                            Основные направления<br />
                            <ul>
                                <li>Информирование</li>
                                <li>Обучение</li>
                                <li>Поддержка предпринимателей</li>
                                <li>Нетворкинг</li>
                            </ul><br />

                            Мы предоставляем ресурсы и услуги, необходимые для вывода бизнеса на новый уровень - локально и глобально.

                        </p>
                    )}
                    {language === "o'zbekcha" && (
                        <p className={aboutStyles.text}>
                            Farg‘ona vodiysida tadbirkorlikni rivojlantirish, qo‘llab-quvvatlash va rag‘batlantirish maqsadida “Farg‘ona vodiysi biznes akademiyasi” mas’uliyati cheklangan jamiyati tashkil etildi.
                            <br /><br />
                            Farg‘ona vodiysi tadbirkorlariga o‘z g‘oya va rejalarini ro‘yobga chiqarish, natijaga erishishda ko‘maklashish asosiy maqsadimizdir.
                            <br /><br />
                            Asosiy yo'nalishlar<br />
                            <ul>
                                <li>Axborot berish</li>
                                <li>Ta'lim</li>
                                <li>Tadbirkorlarni qo'llab-quvvatlash</li>
                                <li>Tarmoqqa ulanish</li>
                            </ul>
                            <br /><br />

                            Biz sizning biznesingizni keyingi bosqichga olib chiqishingiz uchun zarur bo'lgan resurslar va xizmatlarni taqdim etamiz - mahalliy va global.

                        </p>
                    )}
                    {language === 'kyrgyz' && (
                        <p className={aboutStyles.text}>
                            Fergana Valley Business Academy жоопкерчилиги чектелген коому Фергана өрөөнүндө ишкерликти өнүктүрүү, колдоо жана өнүктүрүү максатында түзүлгөн.
                            <br /><br />
                            Негизги максатыбыз – Фергана өрөөнүнүн ишкерлерине өз идеяларын, пландарын ишке ашырууга жана натыйжаларга жетишүүгө жардам берүү.
                            <br /><br />
                            Негизги багыттары<br />
                            <ul>
                                <li>Маалымат берүү</li>
                                <li>Билим берүү</li>
                                <li>Ишкерлерди колдоо</li>
                                <li>Networking</li>
                            </ul>
                            <br /><br />

                            Биз сиздин бизнесиңизди кийинки деңгээлге чыгаруу үчүн керектүү ресурстарды жана кызматтарды сунуштайбыз - жергиликтүү жана глобалдык.
                            <br /><br />

                        </p>
                    )}
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to='/about'>
                        <button className={styles.about_btn}>
                            {language === 'russian' && 'Подробнее о нас'}
                            {language === 'kyrgyz' && 'Биз жөнүндө көбүрөөк'}
                            {language === "o'zbekcha" && "Biz haqimizda ko'proq"}
                        </button>
                    </NavLink>
                </div>

                <div className={styles.contents__imgBlock}>
                    <img src={aboutImagess} alt='/' className={styles.contents__img} />
                </div>



            </div>


            <div className={aboutStyles.second_section}>
                <div className="container1">
                    <h2 className={aboutStyles.white_title}>
                        {language === 'russian' && 'Fergana Valley Business Academy в Цифрах'}
                        {language === 'kyrgyz' && 'Сандар боюнча Фергана өрөөнүнүн бизнес академиясы'}
                        {language === "o'zbekcha" && 'Farg‘ona vodiysi biznes akademiyasi raqamlarda'}
                    </h2>
                    <Cards />
                </div>

            </div>



            <div className={styles.services}>

                <div className='container1'>

                    <h1 className={styles.services__title}>
                        {language === 'russian' && 'Продукты и Услуги'}
                        {language === 'kyrgyz' && 'Продукциялар жана кызматтар'}
                        {language === "o'zbekcha" && 'Mahsulotlar va xizmatlar'}
                    </h1>

                    {
                        width <= 688 ? <SliderAdaptability
                            text={'MainProduct'}
                            data={adaptivChangeLangues} /> :


                            <div className={styles.services__conteiner}>
                                {
                                    changeLangues?.map((item =>
                                        <img key={item.id} src={item.icon} alt='/' className={styles.services_img} />
                                    ))
                                }

                            </div>


                    }

                </div>

                {
                    width <= 688 ?
                        <a href={WatsapLink} target='_blank'
                            style={{ textDecoration: 'none' }}
                            rel='noreferrer'>
                            <Button text={moreb}
                                width={width < 421 ? '81%' : '343px'}
                            />
                        </a>
                        :
                        <a href={WatsapLink} target='_blank'
                            style={{ textDecoration: 'none' }}
                            rel='noreferrer'>
                            <Button text={mainb} />
                        </a>
                }

            </div>

            <Founders />
            <OurPartners />

            <div className={styles.events}>

                <div className={styles.events1} >

                    <div className='container1' >
                        <h1 className={styles.events__title} >
                            {language === 'russian' && 'Новости'}
                            {language === 'kyrgyz' && 'Жаңылыктар'}
                            {language === "o'zbekcha" && 'Yangiliklar'}
                        </h1>

                        <NewsConteiner date={sliceEvent} />

                    </div>
                </div>


                <NavLink to='/events' style={{ textDecoration: 'none' }} >
                    {
                        width <= 600 ?
                            <Button width={'85%'}
                                text={moreb} />
                            : <Button
                                // width={'82%'}
                                text={newsb} />
                    }

                </NavLink>

                <Footer />
            </div>



        </div>
    )
}
