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

  function textSlice(text) {
    var sliced = text.slice(0, 55); // ввывод количество символов
    if (sliced.length < text.length) {
      sliced += '...';
    }
    return sliced
  }

  return (
    <div className={styles.content} >
      {
        date.map(item => (

          <NavLink to={`/evntsDetailed/${item.id}`}
            onClick={() => handleDetalis(item)} className={styles.d} >

            <img src={item.main_image} alt='/' className={styles.wrapper__imgFon} />

            <div className={styles.wrapper__conteiner}>
              <p className={styles.wrapper__conteiner__date} >{item.date}</p>
              <p className={styles.wrapper__conteiner__title}>
                {lang === 'russian' && textSlice(item.title_ru)}
                {lang === 'kyrgyz' && textSlice(item.title_kg)}
                {lang === "o'zbekcha" && textSlice(item.title_uz)}</p>
            </div>

          </NavLink>

        ))
      }

    </div >
  )
}
