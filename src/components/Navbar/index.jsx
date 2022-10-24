import React from 'react'
import styles from '../../Styles/Navbar.module.scss'
import { LogoTip } from '../../images/index.js'
import { nameBar } from './NameNavbar.js'
import { NavLink } from 'react-router-dom'
import { iconLangusges } from '../../images/index.js'
import { useState } from 'react'
import LanguagesBar from '../LanguagesBar/index'

export default function Navbar() {

    const [isOpenLanguages, setIsOpenLanguages] = useState(false)

    const handleIsOpen = () => {
        isOpenLanguages ? setIsOpenLanguages(false) : setIsOpenLanguages(true)
    }

    return (
        <div>
            <div className={styles.navbar} >
                <div className={styles.navbar__conteinerss}>


                    <NavLink to='/*'> <img src={LogoTip} alt='not find'
                        className={styles.navbar__log} />  </NavLink>

                    <div className={styles.navbar_item}>

                        <nav>
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
                    </div>
                    <img src={iconLangusges} alt='not icon' onClick={handleIsOpen} />
                </div>


            </div >



            {
                // Что бы открывать  окошки для смены языка
                isOpenLanguages &&
                <div className={styles.languagesBar} >
                    <LanguagesBar />
                </div>
            }
        </div >
    )
}
