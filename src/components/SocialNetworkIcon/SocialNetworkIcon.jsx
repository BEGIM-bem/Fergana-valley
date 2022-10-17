import React from 'react'
import {
    iconInstagram,
    iconWatsap,
    iconFacbook,
    iconTelegram
} from '../../images/index.js'
import { Routes, Route, NavLink } from 'react-router-dom';
import '../../Styles/SocialNetworkIcon.scss'




export default function SocialNetworkIcon() {
    return (
        <div className='conteiner__icon' >

            <NavLink to='' target='_blank' >
                <img src={iconInstagram} alt='not find icon' className='icon' />
            </NavLink>



            <NavLink to='' target='_blank' >
                <img src={iconTelegram} alt='not find icon' className='icon' />
            </NavLink>

            <NavLink to='' target='_blank' >
                <img src={iconFacbook} alt='not find icon' className='icon' />
            </NavLink>



            <NavLink to='' target='_blank' >
                <img src={iconWatsap} alt='not find icon' className='icon' />
            </NavLink>


        </div>
    )
}
