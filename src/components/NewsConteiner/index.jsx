import React from 'react'
import { newsImage1, newsImage2 } from '../../images/index.js'
import styles from '../../Styles/NewsConteiner.module.scss'

export default function NewsConteiner() {

  let date = [
    {
      id: 1,
      images: newsImage1,
      title: 'Только сложившаяся структура организации сделала своё дело',
      date: '29 сен'
    },
    {
      id: 1,
      images: newsImage2,
      title: 'В провинции никого не пугает полуночный пёсий вой',
      date: '15 окт'
    }

  ]

  return (
    <div className={styles.content} >
      {
        date.map(item => (
          <div className={styles.wrapper} key={item.id}>

            <img src={item.images} alt='/' />

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
