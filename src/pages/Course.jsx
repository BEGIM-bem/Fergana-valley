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
import {useDispatch, useSelector} from "react-redux";
import {getCourse, sendComment} from "../api/course";
import AuthModal from "../components/Modal/AuthModal";
import {useFormik} from "formik";
import {authUser} from "../api/user";
import * as Yup from "yup";
import {getCookie} from "../utils/Cookies";

export default function Course() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openAuth, setOpenAuth] = React.useState(false);
    const handleOpenAuth = () => setOpenAuth(true);
    const handleCloseAuth = () => setOpenAuth(false);

    const dispatch = useDispatch()
    const {course} = useSelector(state => state.course)
    console.log("course: ", course)

    useEffect(() => {
        window.scrollTo(0, 0);
        handleOpenAuth()
        // dispatch(getCourse())
    }, [])

    const screenWidth = window.screen.width

    const AccessSchema = Yup.object().shape({
        text: Yup.string()
            .required("Обязательное поле")
    });

    const id = getCookie('userId')

    const formik = useFormik({
        initialValues: {
            text: "",
            user: id,
            course: 1
        },
        validationSchema: AccessSchema,
        onSubmit: (data) => {
            console.log(data)
            dispatch(sendComment(data))
        }
    })

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
                        <form onSubmit={formik.handleSubmit} className={courseStyles.comment_inp_cont}>
                            <button type='submit' className={courseStyles.comment_button}>Добавить</button>
                            <textarea name='text' onChange={formik.handleChange} className={courseStyles.comments_input} placeholder='Добавить комментарий' type="text"/>
                        </form>
                        <Comments/>
                        <NavLink style={{ textDecoration: 'none',cursor: 'default' }} to='/comments'>
                            <Button text='Все комментарии'/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
            <AccessModal open={open} handleClose={handleClose}/>
            <AuthModal openAuth={openAuth} handleOpen={handleOpen} handleCloseAuth={handleCloseAuth}/>
            </>
    )
}
