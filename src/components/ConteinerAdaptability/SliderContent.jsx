import React from "react";
import styles from './index.module.scss'
import { switchs, switchsBlack } from '../../images/index.js'

function SliderForContent({ prevSlide, activeIndex, sliderImage, screenWidth }) {


    return (
        <div className={styles.slideshow}>

            {
                sliderImage.map((slide, index) =>

                    <div
                        key={index}
                        className={index === activeIndex ?
                            [styles.slides, styles.active] :
                            styles.inactive}>

                        <img style={{ width: '100%' }}
                            className={styles.slideImage}
                            src={slide.images} alt='/' />



                    </div>

                )
            }
            <div onClick={prevSlide}
                className={styles.slideshow__icon}>
                <img
                    src={switchsBlack} alt='/' />
            </div>

        </div>

    )
}

export default SliderForContent;