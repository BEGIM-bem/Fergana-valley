import React from "react";
import styles from './index.module.scss'
import { switchs, switchsBlack } from '../../images/index.js'
import styless from '../CardsCompon.js/index.module.scss'
import { whiteStrellka } from '../../imagesProduct/index.js'
function SliderForContent({ prevSlide, screenWidth, activeIndex, vid, sliderImage, colorArrow }) {

    return (

        <div className={styles.slideshow}>

            {
                vid === 'events' ?
                    sliderImage.map((item, index) =>
                        <div
                            key={index}
                            style={{ maxWidth: screenWidth }}
                            className={index === activeIndex ?
                                styles.actives :
                                styles.inactives}
                        >
                            <div className={styles.d}>
                                <img src={item.icon} alt='/' className={styles.sa} />
                            </div>

                            <h1 className={styles.contents__titles1}>{item.title} </h1>
                            <p className={styles.contents__text1}>{item.text} </p>
                            <p className={styles.contents__br11}>{item.br}</p>
                        </div>
                    )
                    :
                    sliderImage.map((item, index) =>
                        <div
                            key={index}
                            style={{ maxWidth: screenWidth }}
                            className={index === activeIndex ?
                                styles.active :
                                styles.inactive}
                        >

                            <img src={item.icon} alt='/' />
                            <h1 className={styless.contents__title}>{item.title} </h1>
                            <p className={styless.contents__text}>{item.text} </p>
                            <p className={styless.contents__br}>{item.br}</p>
                        </div>

                    )
            }

            <div onClick={prevSlide}
                className={styles.slideshow__icon}>
                {
                    colorArrow === 'white' ?
                        <img
                            src={whiteStrellka} alt='/' />
                        :
                        <img
                            src={switchsBlack} alt='/' />
                }
            </div>

        </div>

    )
}

export default SliderForContent;