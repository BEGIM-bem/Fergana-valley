import React from "react";
import LanguagesBar from "../LanguagesBar";
import SocialNetworkIcon from "../SocialNetworkIcon/SocialNetworkIcon";
import styles from './slider.module.css'
import {
    paginationsArrows1,
    paginationsArrows2
} from '../../images/index.js'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


function SliderContent({ activeIndex, sliderImage, prevSlide, nextSlide, }) {

    const { language } = useSelector(state => state.localization)
    const { status, error, LinkSocialNetwork } = useSelector(state => state.contacts)
    // console.log("LinkSocialNetwork: ", LinkSocialNetwork[0])
    return (

        <section className={styles.slideshow}>

            <div className={styles.operations} >


                <div className={styles.operations__icon} >
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
                        <img src={paginationsArrows2} className={styles.arrows__prev_icon}
                            alt='Not find RightArrow' />
                    </div>

                </div>

            </div>
            {
                sliderImage.map((slide, index) => (
                    <div
                        key={index}
                        className={index === activeIndex ?
                            [styles.slides, styles.active] : styles.inactive}>

                        <img className={styles.slideImage} src={slide.urls} alt="not find" />

                        <div className={styles.contentSlider}>
                            {slide.title && <h1 className={styles.tiitleOne}>{slide.title}</h1>}
                            {slide.titleSmoll && <p className={styles.titleSmoll}>{slide.titleSmoll} </p>}
                            {slide.titleBig && <p className={styles.titleBig}>{slide.titleBig} </p>}
                            {slide.titleBig2 && <p className={styles.tiitleOne}>{slide.titleBig2}</p>}
                            {slide.textImages && <button className={styles.btn}  >{slide.textImages} </button>}
                        </div>

                        {
                            slide.events && (
                                <div className={styles.events__block}>
                                    <h1 className={styles.events__title}>{slide.titleEvents}</h1>

                                    <div className={styles.events_contents}>
                                        <h1 className={styles.events_contents_title}>
                                            {slide.events}
                                        </h1>

                                        <NavLink to='/events'>
                                            <button className={styles.events__btn} >{slide.btnText} </button>
                                        </NavLink>
                                    </div>
                                    <button className={styles.events_data}>{slide.data}</button>
                                </div>)
                        }
                    </div>

                ))
            }





        </section >
    );
}

export default SliderContent;