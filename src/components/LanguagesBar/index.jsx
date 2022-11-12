import React from 'react'
import styles from '../../Styles/LanguagesBar.module.scss'
import { Formik, Form, Field } from "formik";
import { iconRussions, iconKyrgyzstan, iconOzbekstan } from '../../images/index.js'
import { useDispatch } from 'react-redux';
import {changeLang} from "../../redux/localizationSlice";


export default function LanguagesBar() {

    const dispatch = useDispatch()

    const changeLocalization = (lang) => dispatch(changeLang(lang))


    /*
    Здесь написанно radio кнопки для смены языка
    */
    return (
        <div className={styles.conteiner}>
            <div onClick={() => changeLocalization('russian')} className={styles.conteiner__blok}>
                <input className={styles.switch_texst} name='selection'
                    value='RussionLanguages' defaultChecked='RussionLanguages'
                    id='NotСelebrate' type='radio' />
                <img src={iconRussions} className={styles.icon__countury}
                    alt='not fing icon' />
                <label className={styles.switch__radio} htmlFor='NotСelebrate'>
                    Русский</label> <br />
            </div>

            <div onClick={() => changeLocalization('kyrgyz')} className={styles.conteiner__blok}>
                <input className={styles.switch_texst} name='selection'
                    value='KygyztanLanguages' id='NotСelebrate' type='radio' />
                <img src={iconKyrgyzstan} className={styles.icon__countury}
                    alt='not fing icon' />
                <label className={styles.switch__radio} htmlFor='NotСelebrate'>
                    Кыргызча</label> <br />
            </div>

            <div onClick={() => changeLocalization("o'zbekcha")} className={styles.conteiner__blok_last}>

                <input className={styles.switch_texst} name='selection'
                    value='OzbekstanLanguages' id='NotСelebrate' type='radio' />

                <img src={iconOzbekstan} className={styles.icon__countury}
                    alt='not fing icon' />


                <label className={styles.switch__radio} htmlFor='NotСelebrate'>
                    О'zbekcha</label> <br />
            </div>




        </div>
    )
}


