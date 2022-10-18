import React from 'react'
import {
    iconInstagram,
    iconWatsap,
    iconFacbook,
    iconTelegram
} from '../../images/index.js'

import '../../Styles/SocialNetworkIcon.scss'


// Иконки и ссылки на СоцСети

export default function SocialNetworkIcon() {
    return (
        <div className='conteiner__icon' >

            <a href='https://www.instagram.com/fergana.academy' target='_blank' rel='noreferrer' >
                <img src={iconInstagram} alt='not find icon' className='icon' />
            </a>


            <a href='https://t.me/ferganaacademy' target='_blank' rel='noreferrer'  >
                <img src={iconTelegram} alt='not find icon' className='icon' />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100082980775850' target='_blank' rel='noreferrer'  >
                <img src={iconFacbook} alt='not find icon' className='icon' />
            </a>



            <a href='https://wa.me/996996777777549' target='_blank' rel='noreferrer'  >
                <img src={iconWatsap} alt='not find icon' className='icon' />
            </a>


        </div>
    )
}
