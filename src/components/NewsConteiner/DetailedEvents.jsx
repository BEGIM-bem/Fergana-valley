import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Errors from '../Actions/Errors';
import Spinner from '../Actions/Spinner';
import styles from './styles/detailesEvents.module.scss'
import { newsImage1, eventsCalendar, testNews } from '../../images/index.js'
import NewsConteiner from '.';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom'


export default function DetailedEvents() {
    const { status, error, allEvents } = useSelector(state => state.events)

    const dispatch = useDispatch()

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    let idEvents = {
        id: 1,
        images: newsImage1,
        title: 'Только сложившаяся структура организации сделала своё дело',
        date: '29 сен',
        title1: 'Новая парадигма реальности: цены на бензин начинают падать',
        text1: " Есть над чем задуматься: некоторыео собенности внутренней политики призваны к ответу. Для современного мира социально-экономическое развитие выявляет срочную потребность глубокомысленных рассуждений.Повседневная практика показывает, что высокотех- нологичная концепция общественного уклада требует определения и уточнения экономической целесообразности принимаемых решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что предприниматели в сети интернет будут преданы социально- демократической анафеме.",

        title2: 'Фотографии с места событий',
        title3: 'Новая парадигма реальности: цены на бензин начинают падать',
        text2: 'Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть заблокированы в рамках своих собственных рациональных',
        title4: 'Не следует забывать, что спикеры палаты госдумы негодуют',
        link: 'https://www.youtube.com/watch?v=x9I3gcydb_o',
        imagesAll: [
            {
                id: 1,
                images: testNews,
            },
            {
                id: 1,
                images: testNews,
            },
            {
                id: 1,
                images: newsImage1,
            },

        ]
    }


    return (
        <div className={styles.detailes} >

            {status.getEventIdStatus === 'Gettining id event' && <Spinner />}
            {error.getEventIdStatus === 'Rejected geted  id event' && <Errors />}



            <div className={styles.banner}>
                <img className={styles.banner_image}
                    src={idEvents.images} alt="/"></img>
                <h1 className={styles.mainTitle}>{idEvents.title}
                </h1>
            </div>

            <div className={styles.dates}>

                <div className={styles.banner__data}>
                    <img src={eventsCalendar} alt='/' />
                    <h1 className={styles.banner__data_number}>
                        29.09.2022
                    </h1>
                </div>
            </div>



            <div className={styles.contents}>

                <div className={styles.contents__text}>
                    <h1 className={styles.contents__text__title}>{idEvents.title1}</h1>
                    <p className={styles.contents__textP}> {idEvents.text1} </p>
                </div>

                <div className={styles.contents__imgBlock}>
                    <img src={idEvents.images} alt='/' className={styles.contents__img} />
                </div>
            </div>

            <div className='containerFor'>
                <h1 className={styles.detailes__title}>Фотографии с места событий</h1>

                <div className={styles.event__detailed_images}>
                    {
                        idEvents.imagesAll.slice(0, 6).map(item => (
                            <div className={styles.blockimg} >

                                <img className={styles.event__detailed_imag}
                                    src={item.images} key={item.id} alt='/' />
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='containerFor'>
                <h1 className={styles.detailes__text_Title}>{idEvents.title3}</h1>

                <p className={styles.detailes__text1}>{idEvents.text2}  </p>
                <h1 className={styles.detailes__text_Title}>{idEvents.title4}</h1>

                <a href={idEvents.link} className={styles.detailes__text_link}
                    target='_blank' rel="noreferrer">{idEvents.link}</a>
            </div>



            <div className='containerFor'>
                <h1 className={styles.Other}> Другие Новости</h1>
                <NewsConteiner date={allEvents} />


            </div>

            <Footer />

        </div >
    )
}
