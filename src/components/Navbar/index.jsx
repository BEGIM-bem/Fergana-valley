import React from 'react'
import styles from '../../Styles/Navbar.module.scss'
import { LogoTip } from '../../images/index.js'
import { nameBar } from './NameNavbar.js'
import { NavLink, useLocation } from 'react-router-dom'
import './index.scss'
import {
    iconLangusges, close,
    open,
} from '../../images/index.js'
import { useState } from 'react'
import LanguagesBar from '../LanguagesBar/index'
import { useEffect } from 'react'
import { useSelector, } from "react-redux";
import useWindowDimensions from '../../pages/with.jsx';

import { useRouteMatch, Route } from 'react-router-dom';
import zIcon from './замен.png'

export default function Navbar() {

    const [pathss, setPathss] = useState('')
    const location = useLocation();
    const lang = useSelector(state => state.localization.language)

    useEffect(() => {

        setPathss(location.pathname);

    }, [location.pathname])

    useEffect(() => {
        setIsOpenLanguages(false)
    }, [lang])

    const { height, width } = useWindowDimensions();

    const [paths, setPaths] = useState('')

    const { language } = useSelector(state => state.localization)

    const translate = (ru, kg, uz) => {
        return `${language === 'russian' ? ru : ''}
                                    ${language === 'kyrgyz' ? kg : ''}
                                    ${language === "o'zbekcha" ? uz : ''}`
    }

    useEffect(() => {

        setPaths(window.location.pathname)

    }, [window.location.pathname, paths])




    const [isOpenLanguages, setIsOpenLanguages] = useState(false)
    const [clicked, setClicked] = useState(false)

    const [isOpenList, setIsOpenList] = useState(false)

    const handleIsOpen = () => {
        isOpenLanguages ? setIsOpenLanguages(false)
            : setIsOpenLanguages(true)
    }

    useEffect(() => {
        setClicked(false)
    }, [lang])

    const handleList = () => {

        setIsOpenList(true)
    }


    const handleClickOpen = () => {
        setClicked(true)
    }
    const handleClickClose = () => {
        setIsOpenList(false)
        setClicked(false)
    }



    const handleclose = () => {
        setIsOpenList(false)

        setClicked(false)
    }





    return (
        <div>
            <div className={clicked === true ?
                styles.Navbar : width > 1700 ?
                    styles.Navbar3 : styles.Navbar1} >



                <div className={width > 800 ? styles.navbar__conteinerss
                    : styles.blocks
                }>
                    {/* LogoTip */}
                    <NavLink to='/*'> <img src={LogoTip} alt='not find'
                        className={styles.navbar__log} />  </NavLink>

                    <div className={styles.menuIcon} >
                        {
                            clicked ?
                                <img src={close} onClick={handleClickClose} alt='/' className={styles.icons} />
                                // onClick={handleClickClose}
                                :
                                <img src={open} alt='/' onClick={handleClickOpen} />}
                        {/* onClick={handleClickOpen} */}

                    </div>

                    {/* <div className={styles.f1}> */}
                    {
                        !isOpenList &&
                        <nav className={clicked ?
                            styles.Navbar__active
                            : styles.Navbar__navMenu}>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                onClick={handleClickClose}
                                to={'/about'}> {translate('Кто мы?', 'Биз жөнүндө', 'Biz haqimizda')}
                            </NavLink>


                            <div className={styles.dropdown} >
                                {
                                    width <= 900 ?
                                        <NavLink onClick={handleList}
                                            className={(navDate) => navDate.isActive ?
                                                styles.active : styles.navbar_item_to}

                                            to={'/products_services'}>{translate('Продукты и Услуги', 'Продукциялар', 'Mahsulotlar va xizmatlar')}
                                        </NavLink>
                                        :
                                        <NavLink
                                            className={(navDate) => navDate.isActive ?
                                                styles.active : styles.navbar_item_to}
                                            to={'/products_services'} >
                                            {translate('Продукты и Услуги', 'Продукциялар', 'Mahsulotlar va xizmatlar')}
                                        </NavLink>
                                }


                                {
                                    pathss === '/products_services' &&
                                    <div className={styles.linkBar
                                    }>
                                        <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#buzness">
                                            {translate('Бизнес управление', 'Бизнести башкаруу', 'Biznes boshqaruvi')}
                                        </a> </p>
                                        <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#finans">
                                            {translate('Финансирование', 'Каржылоо', 'Moliyalashtirish')}
                                        </a> </p>
                                        <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#exports">
                                            {translate('Экспорт', 'Экспорт', 'Eksport')}
                                        </a></p>
                                        <p><a className={styles.linkBar__link} href="#events">
                                            {translate('Новости', 'Жаңылыктар', 'Yangiliklar')}
                                        </a></p>
                                    </div>
                                }
                            </div>



                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                onClick={handleClickClose}
                                to={'/course'}>

                                {translate(' Курс “Бизнес с 0” ', '"Бизнес 0дөн" курсу', '“Biznes 0 dan” kursi')}
                            </NavLink>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/events'}
                                onClick={handleClickClose}
                            >
                                {translate('Новости', 'Жаңылыктар', 'Yangiliklar')}
                            </NavLink>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/contacts'}
                                onClick={handleClickClose}>
                                {translate('Контакты', 'Байланыштар', 'Kontaktlar')}
                            </NavLink>
                        </nav>
                    }


                    {

                        isOpenList &&
                        < nav className={clicked ?
                            styles.Navbar__active
                            : styles.Navbar__navMenu1}
                        >
                            <p style={{ paddingTop: '30px', paddingBottom: '32px' }} onClick={handleclose} >
                                <a className={styles.linkBar__link} href="#buzness">
                                    {translate('Бизнес управление', 'Бизнести башкаруу', 'Biznes boshqaruvi')}
                                </a> </p>
                            <p style={{ paddingBottom: '32px' }} onClick={handleclose}  > <a className={styles.linkBar__link} href="#finans">
                                {translate('Финансирование', 'Каржылоо', 'Moliyalashtirish')}
                            </a> </p>
                            <p style={{ paddingBottom: '32px' }} onClick={handleclose} ><a className={styles.linkBar__link} href="#exports">
                                {translate('Экспорт', 'Экспорт', 'Eksport')}
                            </a></p>
                            <p onClick={handleclose} ><a className={styles.linkBar__link} href="#events">
                                {translate('Новости', 'Жаңылыктар', 'Yangiliklar')}
                            </a></p>

                        </nav>

                    }



                    {
                        !isOpenList &&
                        <div className={styles.d}>

                            <img src={iconLangusges} alt='not icon'
                                className={styles.iconLan}
                                onClick={handleIsOpen} />

                            {  // Что бы открывать  окошки для смены языка
                                (clicked ||
                                    isOpenLanguages) &&



                                <div className={styles.languagesBar} >
                                    <LanguagesBar />
                                </div>


                            }
                        </div>
                    }
                    {/* </div> */}

                </div >
            </div>


        </div >
    )
}
