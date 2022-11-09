import React from 'react';
import commentsStyles from './../Commets/Comments.module.scss'
import currentStyles from './CurrentLesson.module.scss'
import {MdOutlineCheckBox} from "react-icons/md";
import {FaRegStar} from "react-icons/fa";
import './../../Styles/App.scss'

const CurrentsLesson = () => {
    return (
        <div>
            <hr style={{width: '100%'}}/>
            <div className={commentsStyles.usertext_cont}>
                <div style={{marginBottom: "37px"}}>
                    <h5 className={currentStyles.title_blue_text}>Задачи урока:</h5>
                    <div className={currentStyles.blue_text_cont}>
                        <MdOutlineCheckBox className={currentStyles.icon}/> <span className={currentStyles.blue_text}>Сформировать ценности, на которых будут формироваться финансовые цели</span>
                    </div>
                    <div className={currentStyles.blue_text_cont}>
                        <MdOutlineCheckBox className={currentStyles.icon}/> <span className={currentStyles.blue_text}>Зафиксировать финансовые цели в правильной формултровке</span>
                    </div>
                </div>
                <div>
                    <h5 className={currentStyles.title_blue_text}>Практическое задание после урока:</h5>
                    <div className={currentStyles.blue_text_cont}>
                        <FaRegStar className={currentStyles.icon}/> <p className={currentStyles.blue_text}>Создайте свой страничный финансовый план</p>
                    </div>
                    <div className={currentStyles.blue_text_cont}>
                        <FaRegStar className={currentStyles.icon}/> <p className={currentStyles.blue_text}>Дурное дело нехитрое: коронованный герцог графства определил дальнейшее
                        развитие</p>
                    </div>
                </div>
            </div>
            <div style={{margin: '32px 0'}}>
                <iframe width="100%" height="640px" src="https://www.youtube.com/embed/ARoGZIN5oC4"
                        title="YouTube video player" frameBorder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>

            <div className={commentsStyles.admintext_cont}>
                Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции в значительной степени обусловливает важность приоретизации разума над эмоциями. Лишь ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут в равной степени предоставлены сами себе. Каждый из нас понимает очевидную вещь: консультация с широким активом однозначно фиксирует необходимость направлений прогрессивного развития. В своём стремлении повысить качество жизни, они забывают, что экономическая повестка сегодняшнего дня однозначно фиксирует необходимость приоретизации разума над эмоциями. А также ключевые особенности структуры проекта неоднозначны и будут своевременно верифицированы.
            </div>
            <hr style={{width: '100%'}}/>
        </div>
    );
};

export default CurrentsLesson;
