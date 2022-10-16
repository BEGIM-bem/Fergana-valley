import React from 'react'
import '../../Styles/Navbar.scss'
import { LogoTip } from '../../images/index.js'
import { nameBar } from './NameNavbar.js'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    console.log(nameBar)
    return (
        <div className='navbar' >

            <div className='navbar__conteiner'>
                <img src={LogoTip} alt='not find' />


                <div className='navbar_item'>

                    {
                        nameBar.map(item =>
                            <NavLink to={item.to}>{item.name} </NavLink>
                        )
                    }
                    {/* </nav> */}
                </div>

            </div>


        </div>
    )
}
