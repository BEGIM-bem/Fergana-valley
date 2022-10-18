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

            <a href='https://t.me/Begim_bem' target='_blank' rel='noreferrer' >
                <img src={iconInstagram} alt='not find icon' className='icon' />
            </a>



            <a href='https://t.me/Begim_bem' target='_blank' rel='noreferrer'  >
                <img src={iconTelegram} alt='not find icon' className='icon' />
            </a>

            <a href='https://t.me/Begim_bem' target='_blank' rel='noreferrer'  >
                <img src={iconFacbook} alt='not find icon' className='icon' />
            </a>



            <a href='https://t.me/Begim_bem' target='_blank' rel='noreferrer'  >
                <img src={iconWatsap} alt='not find icon' className='icon' />
            </a>


        </div>
    )
}
