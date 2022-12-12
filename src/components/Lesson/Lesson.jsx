import React from 'react';
import {CiClock2} from "react-icons/ci";
import lessonStyles from './Lesson.module.scss'
import {useSelector} from "react-redux";

const Lesson = ({lesson, onClick, id}) => {

    const {language} = useSelector(state => state.localization)

    return (
        <div onClick={onClick} className={id !== lesson.id ? lessonStyles.card : lessonStyles.active_card}>
            <p className={id !== lesson.id ? lessonStyles.number : lessonStyles.active_number}>
                {language === 'russian' && 'Урок'}
                {language === 'kyrgyz' && 'Cабак'}
                {language === "o'zbekcha" && 'Dars'}
                {lesson.lesson_number}</p>
            <div>
                <p className={id !== lesson.id ? lessonStyles.text1 : lessonStyles.active_text1}>
                    {language === 'russian' && lesson.title_ru}
                    {language === 'kyrgyz' && lesson.title_kg}
                    {language === "o'zbekcha" && lesson.title_uz}
                </p>
                <div className='flex_between'>
                    <p className={id !== lesson.id ? lessonStyles.text2 : lessonStyles.active_text2}>
                        {language === 'russian' && 'В уроке:'}
                        {language === 'kyrgyz' && 'Cабакта:'}
                        {language === "o'zbekcha" && 'Darsta:'}
                    </p>
                    <p style={{width: '73%'}} className={id !== lesson.id ? lessonStyles.text2 : lessonStyles.active_text2}>
                        {language === 'russian' && lesson.description_ru}
                        {language === 'kyrgyz' && lesson.description_kg}
                        {language === "o'zbekcha" && lesson.description_uz}
                    </p>
                </div>
            </div>
            <div className={id !== lesson.id ? lessonStyles.time_cont : lessonStyles.active_time_cont}>
                <CiClock2 className={lessonStyles.time_icon}/>
                <span className={lessonStyles.text2}>{lesson.duration}
                    {language === 'russian' && ' мин'}
                    {language === 'kyrgyz' && ' мин'}
                    {language === "o'zbekcha" && ' min'}
                </span>
            </div>
        </div>
    );
};

export default Lesson;
