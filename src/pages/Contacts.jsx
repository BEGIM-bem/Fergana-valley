import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/Contacts.module.scss'
import {
    contactsFon, contactInstagram,
    contactTelegram,
    contactFacbook,
    contactWatsapp,
} from '../images/index.js'
import './Map/Map.scss'
import Maps from './Map/defaultMarker';
import Footer from '../components/Footer';
import Address from './Address';
import Spinner from '../components/Actions/Spinner';
import Errors from '../components/Actions/Errors';




export default function Contacts() {
    const { status, error, contacts, LinkSocialNetwork } = useSelector(state => state.contacts)


    let contactsWorkTime = [
        {
            id: 1,
            day: 'Понедельник',
            time: '10:00 - 18.00'
        },
        {
            id: 2,
            day: 'Вторник',
            time: '10:00 - 18.00'
        },
        {
            id: 3,
            day: 'Среда',
            time: '10:00 - 18.00'
        },
        {
            id: 4,
            day: 'Четверг',
            time: '10:00 - 18.00'
        },
        {
            id: 5,
            day: 'Пятница',
            time: '10:00 - 18.00'
        },
        {
            id: 6,
            day: 'Суббота',
            time: '10:00 - 18.00'
        },
        {
            id: 7,
            day: 'Воскресенье',
            time: 'Воскресенье'
        },

    ]  //График работы




    let InstagramLink = LinkSocialNetwork[0]?.link
    let TelegramLink = LinkSocialNetwork[1]?.link
    let FacbookLink = LinkSocialNetwork[2]?.link
    let WatsapLink = LinkSocialNetwork[3]?.link



    return (

        <div>
            <div className={styles.banner}>
                <img src={contactsFon} alt='/' className={styles.banner_img} />
                <div className={styles.mainAllText} >
                    <h1 className={styles.mainTitle}>КОНТАКТЫ</h1>

                    <p className={styles.mainText}>МЫ рады услышать вас по телефону,
                        а также привествовать вас в нашем офисе.</p>
                </div>
            </div>


            {status.getContactsStatus === 'Gettining contacts' && <Spinner />}
            {status.getContactsStatus === 'Rejected geted contacts' && <Errors />}

            <div className='containerFor'>

                <div className={styles.contanct}>

                    <div className={styles.schedule}>
                        <h1 className={styles.adress__title}>График работы:</h1>
                        {
                            contactsWorkTime.map(item => (
                                <div className={styles.adressWork} key={item.id} >

                                    <div className={styles.adress__text}>
                                        <p className={styles.adress__text_number}>{item.day} </p>
                                    </div>

                                    <div className={styles.adress__time}>
                                        <p className={styles.adress__text_number}>{item.time} </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <Address />
                </div>

            </div>



            <div className='containerFor'>
                <h1 className={styles.link__title}>Связаться с нами через социальные сети </h1>





                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>Франция намерена исследовать, почему чистосердечное признание облегчает душу </h1>
                        <p className={styles.link__block_text}>(для перехода нажмите на иконку) </p>
                    </div>

                    <a href={InstagramLink} target="_blank" rel="noreferrer" >
                        <img src={contactInstagram} alt='/' />
                    </a>
                </div>


                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>Франция намерена исследовать, почему чистосердечное признание облегчает душу </h1>
                        <p className={styles.link__block_text}>(для перехода нажмите на иконку) </p>
                    </div>

                    <a href={TelegramLink} target="_blank" rel="noreferrer" >
                        <img src={contactTelegram} alt='/' />
                    </a>
                </div>

                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>Франция намерена исследовать, почему чистосердечное признание облегчает душу </h1>
                        <p className={styles.link__block_text}>(для перехода нажмите на иконку) </p>
                    </div>

                    <a href={FacbookLink} target="_blank" rel="noreferrer" >
                        <img src={contactFacbook} alt='/' />
                    </a>
                </div>

                <div className={styles.link__block}>
                    <div className={styles.link__blocks} >
                        <h1 className={styles.link__block_title}>Франция намерена исследовать, почему чистосердечное признание облегчает душу </h1>
                        <p className={styles.link__block_text}>(для перехода нажмите на иконку) </p>
                    </div>

                    <a href={WatsapLink} target="_blank" rel="noreferrer" >
                        <img src={contactWatsapp} alt='/' />
                    </a>
                </div>


            </div>
            <Maps />
            <Footer />
        </div>
    )

}




