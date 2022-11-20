import React from 'react';
import {CiClock2} from "react-icons/ci";
import lessonStyles from './Lesson.module.scss'
import {useSelector} from "react-redux";

const Lesson = ({lesson, onClick}) => {

    const {language} = useSelector(state => state.localization)

    return (
        <div onClick={onClick} className={lessonStyles.card}>
            <p className={lessonStyles.number}>Урок {lesson.lesson_number}</p>
            <div>
                <p className={lessonStyles.text1}>
                    {language === 'russian' && lesson.title_ru}
                    {language === 'kyrgyz' && lesson.title_kg}
                    {language === "o'zbekcha" && lesson.title_uz}
                </p>
                <div className='flex_between'>
                    <p className={lessonStyles.text2}>В уроке:</p>
                    <p>
                        {language === 'russian' && lesson.description_ru}
                        {language === 'kyrgyz' && lesson.description_kg}
                        {language === "o'zbekcha" && lesson.description_uz}
                    </p>
                </div>
            </div>
            <div className={lessonStyles.time_cont}>
                <CiClock2 className={lessonStyles.time_icon}/>
                <span className={lessonStyles.text2}>{lesson.duration} мин</span>
            </div>
        </div>
    );
};

export default Lesson;
