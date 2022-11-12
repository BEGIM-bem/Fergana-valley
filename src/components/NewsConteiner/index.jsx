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


  const handleDetalis = (item) => {

    dispatch(getEventsId(item.id))
  }

  return (
    <div className={styles.content} >
      {
        date.map(item => (

          <NavLink to={`/evntsDetailed/${item.id}`}>
            <div className={styles.wrapper}
              onClick={() => handleDetalis(item)}
              key={item.id}>

              <img src={item.main_image} alt='/' className={styles.wrapper__imgFon} />

              <div className={styles.wrapper__conteiner}>
                <p className={styles.wrapper__conteiner__date} >{item.date.split("").reverse().join('')}</p>
                <p className={styles.wrapper__conteiner__title}>{item.first_text_ru}</p>
              </div>

            </div>
          </NavLink>

        ))
      }

    </div >
  )
}
