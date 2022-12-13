import React from 'react';
import commentsStyles from './../Commets/Comments.module.scss'
import currentStyles from './CurrentLesson.module.scss'
import {MdOutlineCheckBox} from "react-icons/md";
import {FaRegStar} from "react-icons/fa";
import './../../Styles/App.scss'
import {useSelector} from "react-redux";
import {BsFileEarmarkArrowDown} from "react-icons/bs";
import {FcFile} from "react-icons/fc";

const CurrentsLesson = ({lesson}) => {

    const {language} = useSelector(state => state.localization)

    console.log(lesson)

    return (
        <div>
            <hr style={{width: '100%'}}/>
            <div className={commentsStyles.usertext_cont}>
                <div style={{marginBottom: "37px"}}>
                    <h5 className={currentStyles.title_blue_text}>
                        {language === 'russian' && 'Задачи урока:'}
                        {language === 'kyrgyz' && 'Сабактын максаттары:'}
                        {language === "o'zbekcha" && "Dars maqsadlari:"}
                    </h5>
                    <div className={currentStyles.blue_text_cont}>
                        {lesson?.objectives.map(i => <div className={currentStyles.pract__text_cont}>
                                <MdOutlineCheckBox className={currentStyles.icon}/>
                                <span style={{margin: 0}} className={currentStyles.blue_text}>
                                    {language === 'russian' && i.title_ru}
                                    {language === 'kyrgyz' && i.title_kg}
                                    {language === "o'zbekcha" && i.title_uz}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h5 className={currentStyles.title_blue_text}>
                        {language === 'russian' && 'Практическое задание после урока:'}
                        {language === 'kyrgyz' && 'Сабактан кийин көнүгүү:'}
                        {language === "o'zbekcha" && "Darsdan keyin mashq qiling:"}
                    </h5>
                    <div className={currentStyles.blue_text_cont}>
                        {lesson?.practical_works.map(i => <div className={currentStyles.pract__text_cont}>
                            <FaRegStar className={currentStyles.icon}/>
                                <p style={{margin: 0}} className={currentStyles.blue_text}>
                                    {language === 'russian' && i.title_ru}
                                    {language === 'kyrgyz' && i.title_kg}
                                    {language === "o'zbekcha" && i.title_uz}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div style={{margin: '32px 0'}}>
                <iframe width="100%" height="640px" src={lesson?.video}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={commentsStyles.admintext_cont}>
                Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции в значительной степени обусловливает важность приоретизации разума над эмоциями. Лишь ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут в равной степени предоставлены сами себе. Каждый из нас понимает очевидную вещь: консультация с широким активом однозначно фиксирует необходимость направлений прогрессивного развития. В своём стремлении повысить качество жизни, они забывают, что экономическая повестка сегодняшнего дня однозначно фиксирует необходимость приоретизации разума над эмоциями. А также ключевые особенности структуры проекта неоднозначны и будут своевременно верифицированы.
            </div>
            <div className={currentStyles.file_cont}>
                <FcFile/>
                <a target="_blank" href={lesson?.excel_link} download="My_File.pdf">
                    {language === 'russian' && 'Презентация и Инструменты'}
                    {language === 'kyrgyz' && 'Презентация жана куралдар'}
                    {language === "o'zbekcha" && "Taqdimot va asboblar"}</a>
            </div>
            <hr style={{width: '100%'}}/>
        </div>
    );
};

export default CurrentsLesson;
