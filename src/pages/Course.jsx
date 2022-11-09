import React, {useEffect} from 'react'
import aboutStyles from "../Styles/About.module.scss";
import courseStyles from "../Styles/Course.module.scss";
import Lesson from "../components/Lesson/Lesson";
import Footer from "../components/Footer";
import Comments from "../components/Commets/Commets";
import Button from "../components/Button";
import {NavLink} from "react-router-dom";
import AccessModal from "../components/Modal";
import CurrentsLesson from "../components/CurrentLesson";
import Pagination from "../components/Pagination";

export default function Course() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        handleOpen()
    }, [])

    const screenWidth = window.screen.width

    return (
        <>
        <div>
            <div className={`${aboutStyles.banner} ${courseStyles.banner}`}>
                {/*<img className={aboutStyles.banner_image} alt="/"></img>*/}
                <h1 className={aboutStyles.mainTitle}>Курс “Бизнес с 0”</h1>
            </div>
            <div className={courseStyles.content_bg}>
                <div className='container'>
                    <div className={courseStyles.text_cont}>
                        <p className={aboutStyles.text}>Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект требует от нас анализа анализа существующих паттернов поведения. Каждый из нас понимает очевидную вещь: начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки переосмысления внешнеэкономических политик. Таким образом, современная методология разработки, в своём классическом представлении, допускает внедрение укрепления моральных ценностей.</p>
                    </div>
                    <AccessModal open={open} handleClose={handleClose}/>
                    <CurrentsLesson />
                    {screenWidth <= 600 ? (<Pagination/>) :
                        (<div className={courseStyles.lessons_cont}>
                        <Lesson number={2} time={10}/>
                        <Lesson number={2} time={10}/>
                        <Lesson number={2} time={10}/>
                        <Lesson number={2} time={10}/>
                        <Lesson number={2} time={10}/>
                        </div>)
                    }
                    <div className={courseStyles.comments_cont}>
                        <h4 className={courseStyles.comments_title}>Комментарий</h4>
                        <div className={courseStyles.comment_inp_cont}>
                            <button className={courseStyles.comment_button}>Добавить</button>
                            <textarea className={courseStyles.comments_input} placeholder='Добавить комментарий' type="text"/>
                        </div>
                        <Comments/>
                        <NavLink style={{ textDecoration: 'none',cursor: 'default' }} to='/comments'>
                            <Button text='Все комментарии'/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

            </>
    )
}
