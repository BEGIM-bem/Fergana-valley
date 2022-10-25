import React from 'react'
import styles from '../../Styles/Navbar.module.scss'
import { LogoTip } from '../../images/index.js'
import { nameBar } from './NameNavbar.js'
import { NavLink } from 'react-router-dom'
import {
    iconLangusges, close,
    open,
} from '../../images/index.js'
import { useState } from 'react'
import LanguagesBar from '../LanguagesBar/index'



export default function Navbar() {

    const [isOpenLanguages, setIsOpenLanguages] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleIsOpen = () => {
        isOpenLanguages ? setIsOpenLanguages(false) : setIsOpenLanguages(true)
    }


    const handleClick = () => {
        setClicked(!clicked)
    }


    console.log("clicked: ", clicked)
    return (
        <div>
            <div className={clicked === true ? styles.Navbar : styles.Navbar1} >
                <div className={styles.navbar__conteinerss}>

                    {/* <div className={styles.d} > */}

                    <NavLink to='/*'> <img src={LogoTip} alt='not find'
                        className={styles.navbar__log} />  </NavLink>

                    <div className={styles.menuIcon} onClick={handleClick} >
                        {clicked ?
                            <img src={close} alt='/' />
                            :
                            <img src={open} alt='/' />}

                    </div>



                    <nav className={clicked ? styles.Navbar__active : styles.Navbar__navMenu} >

                        {
                            nameBar.map(item =>
                                <NavLink key={item.id}
                                    // className='navbar_item_to'
                                    className={(navDate) => navDate.isActive ? styles.active : styles.navbar_item_to}
                                    to={item.to}>{item.name}
                                </NavLink>
                            )
                        }



                    </nav>

                    <img src={iconLangusges} alt='not icon'
                        className={styles.iconLan}
                        onClick={handleIsOpen} />


                </div>

                {/* </div> */}


            </div >



            {
                // Что бы открывать  окошки для смены языка
                (clicked ||
                    isOpenLanguages) &&
                <div className={styles.languagesBar} >
                    <LanguagesBar />
                </div>
            }
        </div >
    )
}
