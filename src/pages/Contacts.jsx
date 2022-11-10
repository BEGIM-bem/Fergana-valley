import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/Contacts.module.scss'
import {
    contactsFon, contactInstagram,
    contactTelegram,
    contactFacbook,
    contactWatsapp,
} from '../images/index.js'

import DG from '2gis-maps'







export default function Contacts() {
    const { status, error, contacts } = useSelector(state => state.contacts)

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

    ]

    let blockLink = [
        {
            id: 1,
            title: 'Франция намерена исследовать, почему чистосердечное признание облегчает душу',
            text: '(для перехода нажмите на иконку)',
            images: contactInstagram
        },
        {
            id: 2,
            title: 'Франция намерена исследовать, почему чистосердечное признание облегчает душу',
            text: '(для перехода нажмите на иконку)',
            images: contactTelegram
        },
        {
            id: 3,
            title: 'Франция намерена исследовать, почему чистосердечное признание облегчает душу',
            text: '(для перехода нажмите на иконку)',
            images: contactFacbook
        },
        {
            id: 4,
            title: 'Франция намерена исследовать, почему чистосердечное признание облегчает душу',
            text: '(для перехода нажмите на иконку)',
            images: contactWatsapp
        },
    ]





    return (
        <div>
            <div className={styles.banner}>
                <img src={contactsFon} alt='/' className={styles.banner_img} />
                <div className={styles.mainAllText} >
                    <h1 className={styles.mainTitle}>КОНТАКТЫ</h1>

                    <p className={styles.mainText}>МЫ рады услышать вас по телефону, а также привествовать вас в нашем офисе.</p>
                </div>
            </div>

            <div className='containerFor'>

                <div className={styles.contanct}>

                    <div className={styles.schedule}>
                        <h1 className={styles.adress__title}>График работы:</h1>
                        {
                            contactsWorkTime.map(item => (
                                <div className={styles.adressWork} >

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



                    <div className={styles.adress}>
                        <h1 className={styles.adress__title}>Наш адрес:</h1>
                        {
                            contacts.map(item => (
                                <div className={styles.adress__text}>
                                    <p className={styles.adress__text_number}>{item.adress} </p>
                                    <p className={styles.adress__text_number}>{item.city} </p>
                                    <p className={styles.adress__text_number}>Эл.почта: {item.adress} </p>
                                    <p className={styles.adress__text_number}>Тел: {item.telephon} </p>

                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>



            <div className='containerFor'>
                <h1 className={styles.link__title}>Связаться с нами через социальные сети </h1>

                {
                    blockLink.map(item => (
                        <div className={styles.link__block}>
                            <div className={styles.link__blocks} >
                                <h1 className={styles.link__block_title}>{item.title} </h1>
                                <p className={styles.link__block_text}>{item.text} </p>
                            </div>

                            <a href={item.link} target="_blank" rel="noreferrer" >
                                <img src={item.images} alt='/' />
                            </a>
                        </div>
                    ))

                }
            </div>
            {/* <Mapp /> */}



        </div>
    )
}

// const Mapp = () => {
//     useEffect(() => {
//         let map
//         map = DG.map("map-container", {
//             center: [55.31, 25.23],
//             zoom: 5
//         })
//         DG.marker([55.31, 25.23]).addTo(map)
//     }, [])

//     return (
//         <div id="map-container" style={{ width: '100%', height: '600px' }}>

//         </div>

//     )
// }






