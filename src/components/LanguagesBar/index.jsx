import React from 'react'
import styles from '../../Styles/LanguagesBar.module.scss'
import { Formik, Form, Field } from "formik";
import { iconRussions, iconKyrgyzstan, iconOzbekstan } from '../../images/index.js'
import {useDispatch, useSelector} from 'react-redux';
import { changeLang } from "../../redux/localizationSlice";


export default function LanguagesBar() {

    const dispatch = useDispatch()

    const changeLocalization = (lang) => dispatch(changeLang(lang))
    const {language} = useSelector(state => state.localization)

    /*
    Здесь написанно radio кнопки для смены языка
    */
    return (
        <div className={styles.conteiner}>
            <div onClick={() => changeLocalization('russian')}
                className={styles.conteiner__blok}>

                <input className={styles.switch_texst} name='selection'
                    value='RussionLanguages' defaultChecked='RussionLanguages'
                    id='NotСelebrate' type='radio' checked ={language === 'russian'} />
                <img src={iconRussions} className={styles.icon__countury}
                    alt='not fing icon' />
                <label className={styles.switch__radio} htmlFor='NotСelebrate'>
                    Русский</label> <br />
            </div>

            <div onClick={() => changeLocalization('kyrgyz')}
                className={styles.conteiner__blok}>

                <input className={styles.switch_texst} name='selection'
                    value='KygyztanLanguages' id='NotСelebrate2' type='radio' checked = {language === 'kyrgyz'} />
                <img src={iconKyrgyzstan} className={styles.icon__countury}
                    alt='not fing icon' />
                <label className={styles.switch__radio} htmlFor='NotСelebrate2'>
                    Кыргызча</label> <br />
            </div>

            <div onClick={() => changeLocalization("o'zbekcha")}
                className={styles.conteiner__blok_last}>

                <input className={styles.switch_texst} name='selection'
                    value='OzbekstanLanguages' id='NotСelebrate3' type='radio' checked ={language === "o'zbekcha"} />

                <img src={iconOzbekstan} className={styles.icon__countury}
                    alt='not fing icon' />


                <label className={styles.switch__radio} htmlFor='NotСelebrate3'>
                    О'zbekcha</label> <br />
            </div>




        </div>
    )
}


