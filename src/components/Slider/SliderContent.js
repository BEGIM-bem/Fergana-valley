import React from "react";
import LanguagesBar from "../LanguagesBar";
import styles from './slider.module.css'


function SliderContent({ activeIndex, sliderImage, prevSlide, nextSlide, }) {



    return (
        <section className={styles.slideshow}>



            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? [styles.slides, styles.active] : styles.inactive}
                >
                    <div className={styles.d} >

                        <img className={styles.slideImage} src={slide.urls} alt="not find" />

                        <div className={styles.texst} >

                            <p>{slide.description2}</p>
                        </div>

                        <div className={styles.arrows}>
                            <span className={styles.arrows__prev} onClick={prevSlide}>
                                <img className={styles.arrows__prev_icon} src={slide.arrows1} alt='Not find LeftArrow' />

                            </span>
                            <span className={styles.arrows__next} onClick={nextSlide}>
                                <img src={slide.arrows2} className={styles.arrows__next_icon} alt='Not find RightArrow' />
                            </span>
                        </div>

                    </div>


                </div>

            ))}


        </section>
    );
}

export default SliderContent;