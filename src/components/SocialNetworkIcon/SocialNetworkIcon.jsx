import React from 'react'
import {
    iconInstagram,
    iconWatsap,
    iconFacbook,
    iconTelegram
} from '../../images/index.js'

import '../../Styles/SocialNetworkIcon.scss'
import { useDispatch, useSelector } from 'react-redux';


// Иконки и ссылки на СоцСети

export default function SocialNetworkIcon() {
    const { status, error, LinkSocialNetwork } = useSelector(state => state.contacts)

    return (
        <>

            {
                LinkSocialNetwork.map((item, index) => {
                    return (
                        <div key={item.id} className='conteiner__icon' >
                            <a href={item.link} target='_blank' rel='noreferrer' >
                                <img src={item.logo} alt='not find icon' className='icon' />
                            </a>
                        </div>
                    )
                })
            }



        </>
    )
}
