import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import '../Styles/Home.scss'
import {
    mainAboutImg,
    blokMain1,
    blokMain2,
    blockMain3,
    blockMain4
} from '../images/index.js'
import Slider from '../components/Slider/Slider';
import Button from '../components/Button';


export default function Home() {
    return (
        <div>

            <Slider />

            <div className='about' >
                <div className='about__content'>
                    <h1 className='about__content_title' >Кто мы?</h1>
                    <p className='about__content_text'  >Предварительные выводы неутешительны: перспективное
                        планирование позволяет оценить значение вывода текущих активов.
                        Ясность нашей позиции очевидна: современная методология
                        разработки играет определяющее значение для системы массового
                        участия. Внезапно, акционеры крупнейших компаний, вне зависимости
                        от их уровня, должны быть призваны к ответу. Современные
                        технологии достигли такого уровня, что убеждённость некоторых
                        оппонентов является качественно новой ступенью соответствующих
                        условий активизации.</p>
                    <NavLink style={{ textDecoration: 'none' }} to='/about'>  <button className='about_btn'>Подробнее о нас</button> </NavLink>
                </div>
                <img src={mainAboutImg} alt='not find' className='about_img' />
            </div>


            <div className='services'>

                <h1 className='services__title'>Продукты и Услуги</h1>


                <img src={blokMain1} alt='not find' className='services_img' />
                <img src={blokMain2} alt='not find' className='services_img' />
                <img src={blockMain3} alt='not find' className='services_img' />
                <img src={blockMain4} alt='not find' className='services_img' />

                <Button text={'Главное действие '} />
            </div>




        </div>
    )
}
