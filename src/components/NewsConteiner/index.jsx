import React from 'react'
import { useState } from 'react'
import { newsImage1, newsImage2 } from '../../images/index.js'
import styles from '../../Styles/NewsConteiner.module.scss'
import SliderAdaptability from '../ConteinerAdaptability/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getEventsId } from '../../api/events.js'


export default function NewsConteiner({ date }) {



  const dispatch = useDispatch()
  const navigations = useNavigate()

  const handleDetalis = (item) => {
    dispatch(getEventsId({ id: item.id, navigations }))
  }

  return (
    <div className={styles.content} >
      {
        date.map(item => (
          <div className={styles.wrapper}
            onClick={() => handleDetalis(item)}
            key={item.id}>

            <img src={item.images} alt='/' className={styles.wrapper__imgFon} />

            <div className={styles.wrapper__conteiner}>
              <p className={styles.wrapper__conteiner__date} >{item.date}</p>
              <p className={styles.wrapper__conteiner__title}>{item.title}</p>
            </div>

          </div>
        ))
      }

    </div>
  )
}
