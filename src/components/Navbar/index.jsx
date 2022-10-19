import React from 'react'
import '../../Styles/Navbar.scss'
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
        <div className='navbar' >

            <div className='navbar__conteiner'>
                <NavLink to='/*'> <img src={LogoTip} alt='not find' />  </NavLink>

                <div className='navbar_item'>
                    <nav  >
                        {
                            nameBar.map(item =>
                                <NavLink key={item.id}
                                    // className='navbar_item_to'
                                    className={(navDate) => navDate.isActive ? 'active' : 'navbar_item_to'}
                                    to={item.to}>{item.name}
                                </NavLink>
                            )
                        }
                    </nav>
                </div>
                <img src={iconLangusges} alt='not icon' onClick={handleIsOpen} />
            </div>

            {
                // Что бы открывать  окошки для смены языка
                isOpenLanguages &&
                <div className='languagesBar' >
                    <LanguagesBar />
                </div>
            }

        </div >
    )
}
