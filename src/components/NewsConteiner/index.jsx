import React from 'react'
import { useState } from 'react'
import { newsImage1, newsImage2 } from '../../images/index.js'
import styles from '../../Styles/NewsConteiner.module.scss'
import SliderAdaptability from '../ConteinerAdaptability/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getEventsId } from '../../api/events.js'
import { setIdEvents } from '../../redux/eventsSlice.js'


export default function NewsConteiner({ date }) {

  const dispatch = useDispatch()
  const lang = useSelector(state => state.localization.language)


  const handleDetalis = (item) => {
    dispatch(getEventsId(item.id))
  }

  return (
    <div className={styles.content} >
      {
        date.map(item => (

          <NavLink to={`/evntsDetailed/${item.id}`} className={styles.d} >
            <div className={styles.wrapper}
              onClick={() => handleDetalis(item)}
              key={item.id}>

              <img src={item.main_image} alt='/' className={styles.wrapper__imgFon} />

              <div className={styles.wrapper__conteiner}>
                <p className={styles.wrapper__conteiner__date} >{item.date.split("").reverse().join('')}</p>
                <p className={styles.wrapper__conteiner__title}>
                  {lang === 'russian' && item.title_ru}
                  {lang === 'kyrgyz' && item.title_kg}
                  {lang === "o'zbekcha" && item.title_uz}</p>
              </div>

            </div>
          </NavLink>

        ))
      }

    </div >
  )
}
