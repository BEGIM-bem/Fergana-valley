import React from 'react'
import styles from './index.module.scss'

export default function CardsComponents({ data, withs, vid }) {

    return (
        <div className={styles.container2}>

            {
                vid === 'events' ?

                    data.map(item => {
                        return (

                            <div style={{ width: withs, maxWidth: '100%' }}
                                className={styles.contents11}>
                                <img src={item.icon} className={styles.imgIconsEvents} alt='/' />
                                <h1 className={styles.contents__title1}>{item.title} </h1>
                                <p className={styles.contents__text1}>{item.text} </p>
                                <p className={styles.contents__br1}>{item.br}</p>
                            </div>
                        )
                    })
                    :
                    data.map(item => {
                        return (

                            <div style={{ width: withs, maxWidth: '100%' }}
                                className={styles.contents1}>
                                <img src={item.icon} alt='/' />
                                <h1 className={styles.contents__title}>{item.title} </h1>
                                <p className={styles.contents__text}>{item.text} </p>
                                <p className={styles.contents__br}>{item.br}</p>
                            </div>
                        )
                    })

            }
            {/* </div> */}
        </div>
    )
}
