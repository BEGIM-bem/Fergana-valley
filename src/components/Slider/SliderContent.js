import React from "react";
import LanguagesBar from "../LanguagesBar";
import SocialNetworkIcon from "../SocialNetworkIcon/SocialNetworkIcon";
import styles from './slider.module.css'
import {
    paginationsArrows1,
    paginationsArrows2
} from '../../images/index.js'


function SliderContent({ activeIndex, sliderImage, prevSlide, nextSlide, }) {
    console.log("prevSlide: ", prevSlide)
    console.log("nextSlide: ", nextSlide)
    console.log("activeIndex: ", typeof activeIndex)

    return (
        <section className={styles.slideshow}>



            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? [styles.slides, styles.active] : styles.inactive}
                >

                    <div className={styles.d} >
                        {
                            slide.textImages && <button className={styles.btn}  >{slide.textImages} </button>
                        }


                        <img className={styles.slideImage} src={slide.urls} alt="not find" />



                        <div className={styles.operations} >



                            <div>
                                <SocialNetworkIcon />
                            </div>

                            <div className={styles.arrows}>

                                <div className={styles.arrows__prev} onClick={prevSlide}>
                                    <img className={styles.arrows__prev_icon} src={paginationsArrows1}
                                        alt='Not find LeftArrow' />
                                </div>


                                <div className={styles.paginations}>

                                    <p className={activeIndex === 0 ? styles.paginations__numberActive : styles.paginations__number} > 1</p>
                                    <p className={activeIndex === 1 ? styles.paginations__numberActive : styles.paginations__number} >2</p>
                                    <p className={activeIndex === 2 ? styles.paginations__numberActive : styles.paginations__number}>3</p>
                                </div>



                                <div className={styles.arrows__next} onClick={nextSlide}>
                                    <img src={paginationsArrows2} className={styles.arrows__next_icon}
                                        alt='Not find RightArrow' />
                                </div>

                            </div>

                            <div>
                                dddddddddddddddddddddaaaaaaaa
                                ddddddddddddddwwwwwwwww
                                dddddddddddddddddddddaaaaaaaa

                            </div>


                        </div>

                    </div>


                </div>

            ))}





        </section>
    );
}

export default SliderContent;