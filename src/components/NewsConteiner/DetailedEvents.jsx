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
    const lang = useSelector(state => state.localization.language)


    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getEventsId(id))
    }, [])




    console.log("lang: ", lang)

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

                        {lang === 'russian' && <h1 className={styles.mainTitle}>{idEvents.title_ru}</h1>}
                        {lang === 'kyrgyz' && <h1 className={styles.mainTitle}>{idEvents.title_kg}</h1>}
                        {lang === "o'zbekcha" && <h1 className={styles.mainTitle}>{idEvents.title_uz}</h1>}
                    </div>

                    <div className={styles.dates}>

                        <div className={styles.banner__data}>
                            <img src={eventsCalendar} alt='/' />
                            <h1 className={styles.banner__data_number}>
                                {idEvents.date}
                            </h1>
                        </div>
                    </div>

                    <div className={styles.contents}>

                        <div className={styles.contents__text}>
                            {lang === 'russian' && <h1 className={styles.contents__text__title}>{idEvents?.first_title_ru}</h1>}
                            {lang === 'kyrgyz' && <h1 className={styles.contents__text__title}>{idEvents?.first_title_kg}</h1>}
                            {lang === "o'zbekcha" && <h1 className={styles.contents__text__title}>{idEvents?.first_title_uz}</h1>}

                            {lang === 'russian' && <p className={styles.contents__textP}> {idEvents?.first_text_ru} </p>}
                            {lang === 'kyrgyz' && <p className={styles.contents__text__title}>{idEvents?.first_text_kg}</p>}
                            {lang === "o'zbekcha" && <p className={styles.contents__text__title}>{idEvents?.first_text_uz}</p>}
                        </div>

                        <div className={styles.contents__imgBlock}>
                            <img src={idEvents?.cover} alt='/' className={styles.contents__img} />
                        </div>
                    </div>

                    <div className='containerFor'>
                        {lang === 'russian' && <h1 className={styles.detailes__title}>Фотографии с места событий</h1>}
                        {lang === 'kyrgyz' && <h1 className={styles.detailes__title}>Иш-чарадан сүрөттөр  </h1>}
                        {lang === "o'zbekcha" && <h1 className={styles.contents__text__title}>Иш-чарадан сүрөттөр Ozbekstan </h1>}


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
                        {lang === 'russian' && <h1 className={styles.detailes__text_Title}>{idEvents.second_title_ru}</h1>}
                        {lang === 'kyrgyz' && <h1 className={styles.detailes__text_Title}>{idEvents.second_title_kg}</h1>}
                        {lang === "o'zbekcha" && <h1 className={styles.detailes__text_Title}>{idEvents.second_title_uz}</h1>}


                        {lang === 'russian' && <p className={styles.detailes__text1}>{idEvents.second_text_ru}</p>}
                        {lang === 'kyrgyz' && <p className={styles.detailes__text1}>{idEvents.second_text_kg}</p>}
                        {lang === "o'zbekcha" && <p className={styles.detailes__text1}>{idEvents.second_text_uz}</p>}

                        {/* <h1 className={styles.detailes__text_Title}>Не следует забывать, что спикеры палаты госдумы негодуют</h1> */}

                        {lang === 'russian' &&
                            <a href={idEvents.link} className={styles.detailes__text_link}
                                target='_blank' rel="noreferrer">{idEvents.link_description_ru}</a>}

                        {lang === 'kyrgyz' &&
                            <a href={idEvents.link} className={styles.detailes__text_link}
                                target='_blank' rel="noreferrer">{idEvents.link_description_kg}</a>}

                        {lang === "o'zbekcha" &&
                            <a href={idEvents.link} className={styles.detailes__text_link}
                                target='_blank' rel="noreferrer">{idEvents.link_description_uz}</a>}

                    </div>



                    <div className='containerFor'>
                        <h1 className={styles.Other}>
                            {lang === 'russian' && "Другие Новости"}
                            {lang === 'kyrgyz' && "Башка жаңылыктар"}
                            {lang === "o'zbekcha" && "Boshqa yangiliklar"}
                        </h1>
                        <NewsConteiner date={allEvents?.slice(0, 2)} />

                    </div>
                </div>
            }

            {
                status.getEventIdStatus === 'Geted id event' &&
                <Footer />
            }


        </div >
    )
}
