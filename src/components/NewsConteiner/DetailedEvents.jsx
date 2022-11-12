import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Errors from '../Actions/Errors';
import Spinner from '../Actions/Spinner';
import styles from './styles/detailesEvents.module.scss'
import { newsImage1, eventsCalendar, testNews } from '../../images/index.js'
import NewsConteiner from '.';
import Footer from '../Footer';
import { useLocation, useParams } from 'react-router-dom'
import { setIdEvents } from '../../redux/eventsSlice';
import { getEventsId } from '../../api/events';


export default function DetailedEvents() {
    const { status, error, idEvents, allEvents } = useSelector(state => state.events)



    const dispatch = useDispatch()

    const { pathname } = useLocation();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getEventsId(id))
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={styles.detailes} >

            {status.getEventIdStatus === 'Gettining id event' && <Spinner />}
            {error.getEventIdStatus === 'Rejected geted  id event' && <Errors />}


            {
                status.getEventIdStatus === 'Geted id event' &&
                <div>
                    <div className={styles.banner}>
                        <img className={styles.banner_image}
                            src={idEvents.main_image} alt="/"></img>
                        <h1 className={styles.mainTitle}>{idEvents.title_ru}
                        </h1>
                    </div>

                    <div className={styles.dates}>

                        <div className={styles.banner__data}>
                            <img src={eventsCalendar} alt='/' />
                            <h1 className={styles.banner__data_number}>
                                {idEvents.date?.split("").reverse().join('')}
                            </h1>
                        </div>
                    </div>

                    <div className={styles.contents}>

                        <div className={styles.contents__text}>
                            <h1 className={styles.contents__text__title}>{idEvents?.title1}</h1>
                            <p className={styles.contents__textP}> {idEvents?.first_text_ru} </p>
                        </div>

                        <div className={styles.contents__imgBlock}>
                            <img src={idEvents?.cover} alt='/' className={styles.contents__img} />
                        </div>
                    </div>

                    <div className='containerFor'>
                        <h1 className={styles.detailes__title}>Фотографии с места событий</h1>

                        <div className={styles.event__detailed_images}>
                            {
                                idEvents?.images.slice(0, 6).map(item => (
                                    <div className={styles.blockimg} key={item.id} >
                                        <img className={styles.event__detailed_imag}
                                            src={item.image} key={item.id} alt='/' />
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
                            target='_blank' rel="noreferrer">{idEvents.link_description_ru}</a>
                    </div>



                    <div className='containerFor'>
                        <h1 className={styles.Other}> Другие Новости</h1>
                        <NewsConteiner date={allEvents?.slice(0, 2)} />

                    </div>
                </div>
            }

            <Footer />

        </div >
    )
}
