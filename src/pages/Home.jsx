import React from 'react'
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


export default function Home() {

    let sliderImageProduct = [
        {
            id: 1,
            images: blokMain1,
        },
        {
            id: 2,
            images: blokMain2,
        },
        {
            id: 3,
            images: blockMain3,
        },
        {
            id: 4,
            images: blockMain4,
        },

    ]
    const { allEvents, status, error } = useSelector(state => state.events)
    const { LinkSocialNetwork } = useSelector(state => state.contacts)

    let sliceEvent = allEvents.slice(0, 2)

    let WatsapLink = LinkSocialNetwork[3]?.link

    const screenWidth = window.screen.width

    return (
        <div >

            <Slider />

            <div className={`${styles.allAbouts} ${aboutStyles.desc_cont} container1`} >

                <div className={styles.about__contents}>

                    <h1 className={styles.about__content_title} >Кто мы?</h1>
                    <p className={styles.about__content_text}  >Предварительные выводы
                        неутешительны: перспективное
                        планирование позволяет оценить значение вывода текущих активов.
                        Ясность нашей позиции очевидна: современная методология
                        разработки играет определяющее значение для системы массового
                        участия. Внезапно, акционеры крупнейших компаний, вне зависимости
                        от их уровня, должны быть призваны к ответу. Современные
                        технологии достигли такого уровня, что убеждённость некоторых
                        оппонентов является качественно новой ступенью соответствующих
                        условий активизации.</p>
                    <NavLink style={{ textDecoration: 'none' }} to='/about'>
                        <button className={styles.about_btn}>Подробнее о нас</button>
                    </NavLink>
                </div>

                <div className={styles.contents__imgBlock}>
                    <img src={aboutImagess} alt='/' className={styles.contents__img} />
                </div>



            </div>


            <div className={aboutStyles.second_section}>
                <div className="container1">
                    <h2 className={aboutStyles.white_title}>Fergana Valley Business Academy в Цифрах</h2>
                    <Cards />
                </div>

            </div>



            <div className={styles.services}>

                <div className='container1'>

                    <h1 className={styles.services__title}>Продукты и Услуги</h1>
                    {
                        screenWidth <= 688 ? <SliderAdaptability
                            sliderImage={sliderImageProduct} /> :


                            <div className={styles.services__conteiner}>

                                <img src={blokMain1} alt='not find' className={styles.services_img} />
                                <img src={blokMain2} alt='not find' className={styles.services_img} />
                                <img src={blockMain3} alt='not find' className={styles.services_img} />
                                <img src={blockMain4} alt='not find' className={styles.services_img} />

                            </div>
                    }

                </div>

                {
                    screenWidth <= 688 ?
                        <a href={WatsapLink} target='_blank'
                            style={{ textDecoration: 'none' }}
                            rel='noreferrer'>
                            <Button text={'Подробнее'}
                                width={'70%'}
                            />
                        </a>
                        :
                        <a href={WatsapLink} target='_blank'
                            style={{ textDecoration: 'none' }}
                            rel='noreferrer'>
                            <Button text={'Главное действие '} />
                        </a>
                }

            </div>

            <Founders />
            <OurPartners />

            <div className={styles.events}>

                <div className={styles.events1} >

                    <div className='container1' >
                        <h1 className={styles.events__title} >Мероприятия</h1>

                        <NewsConteiner date={sliceEvent} />

                    </div>
                </div>


                <NavLink to='/events' style={{ textDecoration: 'none' }} >
                    {
                        screenWidth <= 600 ?
                            <Button width={'82%'}
                                text={'Подробнее'} />
                            : <Button
                                // width={'82%'}
                                text={'Все новости'} />
                    }

                </NavLink>

                <Footer />
            </div>



        </div>
    )
}
