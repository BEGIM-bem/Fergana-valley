import React from 'react'
import { eventMain } from '../images/index.js'
import styles from '../Styles/Events.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Actions/Spinner.jsx';
import Errors from '../components/Actions/Errors.jsx';
import NewsConteiner from '../components/NewsConteiner/index.jsx';
import Footer from '../components/Footer/index.jsx';

export default function Events() {
    const { allEvents, status, error } = useSelector(state => state.events)
    const lang = useSelector(state => state.localization.language)

    return (
        <div  >
            <div className={styles.event__headers}>

                <h1 className={styles.event__headers__title}>
                    {lang === 'russian' && 'Новости и Мероприятия'}
                    {lang === 'kyrgyz' && 'Жаңылыктар жана окуялар'}
                    {lang === "o'zbekcha" && 'Voqealar va Yangiliklar'}</h1>
            </div>

            {
                status.getEventStatus === 'Gettining event' &&
                <Spinner />
            }

            {
                status.getEventStatus === 'Rejected geted event' &&
                <Errors />
            }


            <div className='containerFor' >
                {
                    allEvents && <NewsConteiner date={allEvents} />
                }


                <p className={styles.contents__text}>


                    {lang === 'russian' && 'Следите за нашими новостями в социальных сетях'}
                    {lang === 'kyrgyz' && 'Биздин жаңылыктарды социалдык тармактардан көрүңүз'}
                    {lang === "o'zbekcha" && 'Биздин жаңылыктарды социалдык тармактардан көрүңүз'}

                </p>
            </div>


            <Footer />

        </div>
    )
}
