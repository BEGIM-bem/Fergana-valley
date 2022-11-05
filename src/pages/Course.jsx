import React from 'react'
import aboutStyles from "../Styles/About.module.scss";
import courseStyles from "../Styles/Course.module.scss";
import Lesson from "../components/Lesson/Lesson";
import Footer from "../components/Footer";
import Comments from "../components/Commets/Commets";
import Button from "../components/Button";
import styles from "../Styles/Home.module.scss";
import {NavLink} from "react-router-dom";

export default function Course() {
    return (
        <div>
            <div className={`${aboutStyles.banner} ${courseStyles.banner}`}>
                {/*<img className={aboutStyles.banner_image} alt="/"></img>*/}
                <h1 className={aboutStyles.mainTitle}>Курс “Бизнес с 0”</h1>
            </div>
            <div className='container'>
                <div className={courseStyles.text_cont}>
                    <p className={aboutStyles.text}>Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект требует от нас анализа анализа существующих паттернов поведения. Каждый из нас понимает очевидную вещь: начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки переосмысления внешнеэкономических политик. Таким образом, современная методология разработки, в своём классическом представлении, допускает внедрение укрепления моральных ценностей.</p>
                </div>
                <div className={courseStyles.lessons_cont}>
                    <Lesson number={2} time={10}/>
                    <Lesson number={2} time={10}/>
                    <Lesson number={2} time={10}/>
                    <Lesson number={2} time={10}/>
                    <Lesson number={2} time={10}/>
                </div>
                <div className={courseStyles.comments_cont}>
                    <h4 className={courseStyles.comments_title}>Комментарий</h4>
                    <input className={courseStyles.comments_input} placeholder='Добавить комментарий' type="text"/>
                    <Comments/>
                    <NavLink style={{ textDecoration: 'none',cursor: 'default' }} to='/comments'>
                        <Button text='Все комментарии'/>
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    )
}