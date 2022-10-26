import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import styles from '../Styles/Home.module.scss'
import {
    mainAboutImg,
    blokMain1,
    blokMain2,
    blockMain3,
    blockMain4
} from '../images/index.js'
import Slider from '../components/Slider/Slider';
import Button from '../components/Button';
import Cards from '../components/Cards';
import aboutStyles from '../Styles/About.module.scss'
import OurPartners from '../components/OurPartners';
import Founders from '../components/Founders';
import NewsConteiner from '../components/NewsConteiner';
import Footer from '../components/Footer/index.jsx'


export default function Home() {


    const screenWidth = window.screen.width
    console.log(screenWidth)
    return (
        <div >

            <Slider />

            <div className="container">
                <div className={styles.flex_between}>
                    <div style={{ marginRight: "10px" }} className={styles.text_container}>
                        <h2 className={styles.title}>Кто мы?</h2>

                        <p className={styles.text}>Предварительные выводы неутешительны: перспективное
                            планирование позволяет оценить значение вывода текущих активов.
                            Ясность нашей позиции очевидна: современная методология
                            разработки играет определяющее значение для системы массового
                            участия. Внезапно, акционеры крупнейших компаний, вне зависимости
                            от их уровня, должны быть призваны к ответу. Современные
                            технологии достигли такого уровня, что убеждённость некоторых
                            оппонентов является качественно новой ступенью соответствующих
                            условий активизации.
                        </p>
                        <Button text={'Подробнее о нас'} />
                        <br />

                    </div>

                    <div className={styles.img_block}>
                        <img className={styles.img} src={mainAboutImg} alt="/" />
                    </div>
                </div>


            </div>




            <div className={aboutStyles.second_section}>
                <div className="container">
                    <h2 className={aboutStyles.white_title}>Fergana Valley Business Academy в Цифрах</h2>
                    <Cards />
                </div>

            </div>



            <div className={styles.services}>

                <div className='container'>

                    <h1 className={styles.services__title}>Продукты и Услуги</h1>
                    <div className={styles.services__conteiner}>

                        <img src={blokMain1} alt='not find' className={styles.services_img} />
                        <img src={blokMain2} alt='not find' className={styles.services_img} />
                        <img src={blockMain3} alt='not find' className={styles.services_img} />
                        <img src={blockMain4} alt='not find' className={styles.services_img} />

                    </div>
                </div>

                {
                    screenWidth <= 324 ?
                        <a href='https://wa.me/996996777777549' target='_blank'
                            style={{ textDecoration: 'none' }}
                            rel='noreferrer'>
                            <button className={styles.btnNews}>Подробнее </button>
                        </a>
                        :
                        <a href='https://wa.me/996996777777549' target='_blank'
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

                    <div className='container' >
                        <h1 className={styles.events__title} >Мероприятия</h1>
                        <NewsConteiner />

                    </div>


                    <NavLink to='/events' style={{ textDecoration: 'none' }} >
                        {
                            screenWidth <= 500 ?
                                <button className={styles.btnNews}>Подробнее </button>
                                : <Button text={'Все новости'} />
                        }

                    </NavLink>

                </div>



                <Footer />
            </div>



        </div>
    )
}
