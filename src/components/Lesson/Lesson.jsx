import React from 'react';
import {CiClock2} from "react-icons/ci";
import lessonStyles from './Lesson.module.scss'

const Lesson = ({number, time, topic}) => {
    return (
        <div className={lessonStyles.card}>
            <p className={lessonStyles.number}>Урок {number}</p>
            <div>
                <p className={lessonStyles.text1}>Нет звука приятнее, чем
                    старческий скрип Амстердама</p>
                <div className='flex_between'>
                    <p className={lessonStyles.text2}>В уроке:</p>
                    <p>Сложно сказать, почему<br/>
                        объемы выросли!</p>
                </div>
            </div>
            <div className={lessonStyles.time_cont}>
                <CiClock2 className={lessonStyles.time_icon}/>
                <span className={lessonStyles.text2}>{time} мин</span>
            </div>
        </div>
    );
};

export default Lesson;
