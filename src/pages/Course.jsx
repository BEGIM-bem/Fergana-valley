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
import {getUser} from "../redux/usersSlice";

export default function Course() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openAuth, setOpenAuth] = React.useState(false);
    const handleOpenAuth = () => setOpenAuth(true);
    const handleCloseAuth = () => setOpenAuth(false);

    const [lessonId, setLessonId] = React.useState(1);

    const dispatch = useDispatch()
    const {course} = useSelector(state => state.course)
    const {language} = useSelector(state => state.localization)
    const users = useSelector(state => state.users.users)
    console.log("course: ", course)
    console.log("coursssssssssssssse: ", users)

    useEffect(() => {
        window.scrollTo(0, 0);
        !getCookie('jwt-token') && handleOpenAuth()
        dispatch(getCourse())
    }, [])

    const screenWidth = window.screen.width

    const AccessSchema = Yup.object().shape({
        text: Yup.string()
            .required("Обязательное поле")
    });

    const course1 = course.find(i => i)
    let current_lesson = course1?.lessons.find(i => i.id === lessonId)
    useEffect(() => {
        current_lesson = course1?.lessons.find(i => i.id === lessonId)
    }, [lessonId])


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
                <h1 className={aboutStyles.mainTitle}>
                    {language === 'russian' && course1?.title_ru}
                    {language === 'kyrgyz' && course1?.title_kg}
                    {language === "o'zbekcha" && course1?.title_uz}
                </h1>
            </div>
            <div className={courseStyles.content_bg}>
                <div className='container'>
                    <div className={courseStyles.text_cont}>
                        <p className={aboutStyles.text}>
                            {language === 'russian' && course1?.description_ru}
                            {language === 'kyrgyz' && course1?.description_kg}
                            {language === "o'zbekcha" && course1?.description_uz}
                        </p>
                    </div>
                    <CurrentsLesson lesson={current_lesson}/>
                    {screenWidth <= 600 ? (<Pagination lessons={course1?.lessons} setLessonId={setLessonId}/>) :
                        (<div className={courseStyles.lessons_cont}>
                            {course1?.lessons.map(lesson => <Lesson onClick={() => setLessonId(lesson.id)} lesson={lesson}/>)}
                        </div>)
                    }
                    <div className={courseStyles.comments_cont}>
                        <h4 className={courseStyles.comments_title}>Комментарий</h4>
                        <form onSubmit={formik.handleSubmit} className={courseStyles.comment_inp_cont}>
                            <button type='submit' className={courseStyles.comment_button}>Добавить</button>
                            <textarea name='text' onChange={formik.handleChange} className={courseStyles.comments_input} placeholder='Добавить комментарий' type="text"/>
                        </form>
                        {course1?.comments.map(comment => <Comments comment={comment}/>)}
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
