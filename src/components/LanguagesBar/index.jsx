import React from 'react'
import '../../Styles/LanguagesBar.scss'
import { Formik, Form, Field } from "formik";
import { iconRussions, iconKyrgyzstan, iconOzbekstan } from '../../images/index.js'

export default function LanguagesBar() {

    /*
    Здесь написанно radio кнопки для смены языка
    */
    return (
        <div className='conteiner' >


            <div className='conteiner__blok'>
                <input className='switch_texst' name='selection'
                    value='RussionLanguages' defaultChecked='RussionLanguages' id='NotСelebrate' type='radio' />
                <img src={iconRussions} className='icon__countury' alt='not fing icon' />
                <label className='switch__radio' htmlFor='NotСelebrate'>
                    Русский</label> <br />
            </div>

            <div className='conteiner__blok'>
                <input className='switch_texst' name='selection'
                    value='KygyztanLanguages' id='NotСelebrate' type='radio' />
                <img src={iconKyrgyzstan} className='icon__countury' alt='not fing icon' />
                <label className='switch__radio' htmlFor='NotСelebrate'>
                    Кыргызча</label> <br />
            </div>

            <div className='conteiner__blok_last'>
                <input className='switch_texst' name='selection'
                    value='OzbekstanLanguages' id='NotСelebrate' type='radio' />
                <img src={iconOzbekstan} className='icon__countury' alt='not fing icon' />
                <label className='switch__radio' htmlFor='NotСelebrate'>
                    О'zbekcha</label> <br />
            </div>




        </div>
    )
}


