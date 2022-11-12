import React from 'react'
import styles from '../../Styles/Navbar.module.scss'
import { LogoTip } from '../../images/index.js'
import { nameBar } from './NameNavbar.js'
import { NavLink } from 'react-router-dom'
import './index.scss'
import {
    iconLangusges, close,
    open,
} from '../../images/index.js'
import { useState } from 'react'
import LanguagesBar from '../LanguagesBar/index'
import { useEffect } from 'react'



export default function Navbar() {
    const [paths, setPaths] = useState('')

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

    const screenWidth = window.screen.width

    const handleClick = () => {
        setIsOpenList(false)
        setClicked(false)
    }

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
            <div className={clicked === true ? styles.Navbar : screenWidth > 1700 ? styles.Navbar3 : styles.Navbar1} >
                <div className={styles.navbar__conteinerss}>
                    <NavLink to='/*'> <img src={LogoTip} alt='not find'
                        className={styles.navbar__log} />  </NavLink>

                    <div className={styles.menuIcon}  >
                        {clicked ?
                            <img src={close} alt='/' onClick={handleClickClose} />
                            :
                            <img src={open} alt='/' onClick={handleClickOpen} />}

                    </div>


                    {
                        !isOpenList &&
                        <nav className={clicked ?
                            styles.Navbar__active
                            : styles.Navbar__navMenu}>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/about'}> О нас   </NavLink>


                            <div className={styles.dropdown} >
                                {
                                    screenWidth <= 748 ?
                                        <NavLink onClick={handleList}
                                            className={(navDate) => navDate.isActive ?
                                                styles.active : styles.navbar_item_to}
                                            to={'/products_services'}> Продукты и Услуги  </NavLink>
                                        :
                                        <NavLink
                                            className={(navDate) => navDate.isActive ?
                                                styles.active : styles.navbar_item_to}
                                            to={'/products_services'} > Продукты и Услуги  </NavLink>
                                }

                                <div className={styles.linkBar}>
                                    <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#buzness">Бизнес управление</a> </p>
                                    <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#finans">Финансирование </a> </p>
                                    <p style={{ paddingBottom: '32px' }} > <a className={styles.linkBar__link} href="#exports">Экспорт</a></p>
                                    <p><a className={styles.linkBar__link} href="#events">Мероприятие</a></p>

                                </div>



                            </div>



                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/course'}> Курс “Бизнес с 0” </NavLink>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/events'}>Мероприятия  </NavLink>

                            <NavLink
                                className={(navDate) => navDate.isActive ?
                                    styles.active : styles.navbar_item_to}
                                to={'/contacts'}> Контакты  </NavLink>
                        </nav>
                    }

                    {
                        isOpenList &&
                        < nav className={clicked ?
                            styles.Navbar__active
                            : styles.Navbar__navMenu}
                        >
                            {/* <div className={styles.linkBar}> */}
                            <p style={{ paddingTop: '30px', paddingBottom: '32px' }} onClick={handleclose} > <a className={styles.linkBar__link} href="#buzness">Бизнес управление</a> </p>
                            <p style={{ paddingBottom: '32px' }} onClick={handleclose}  > <a className={styles.linkBar__link} href="#finans">Финансирование </a> </p>
                            <p style={{ paddingBottom: '32px' }} onClick={handleclose} ><a className={styles.linkBar__link} href="#exports">Экспорт</a></p>
                            <p onClick={handleclose} ><a className={styles.linkBar__link} href="#events">Мероприятие</a></p>
                            {/* </div> */}
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
                </div>

            </div >



        </div >
    )
}
