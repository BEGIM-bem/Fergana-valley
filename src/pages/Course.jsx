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
import {getComments, getCourse, sendComment} from "../api/course";
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

    // const currentLessonFunction = (id) => {
    //     setLessonId(id)
    //
    // }

    const dispatch = useDispatch()
    const {course, comments} = useSelector(state => state.course)
    const {language} = useSelector(state => state.localization)
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        window.scrollTo(0, 0);
        !getCookie('jwt-token') && handleOpenAuth()
        dispatch(getCourse())
        dispatch(getComments())
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
    console.log("iddd:", course1)

    const formik = useFormik({
        initialValues: {
            text: "",
            user: id,
            course: 1
        },
        validationSchema: AccessSchema,
        onSubmit: (data, {resetForm}) => {
            console.log(data)
            dispatch(sendComment(data))
            resetForm({data: ''})
        }
    })

    const commentb = `${language === 'russian' ? 'Все комментарии': ''}
                            ${language === 'kyrgyz' ? 'Бардык комментарийлер' : ""}
                            ${language === "o'zbekcha" ? "Barcha sharhlar" : ''}`

    const placeh_text = `${language === 'russian' ? 'Добавить комментарий': ''} ${language === 'kyrgyz' ? 'Комментарий кошуу' : ""}${language === "o'zbekcha" ? "Fikr qo'shing" : ''}`

    const add_comment_text = `${language === 'russian' ? 'Добавить' : ''}
                                ${language === 'kyrgyz' ? 'Kошуу' : ''}
                                ${language === "o'zbekcha" ? "Qo'shish" : ''}`

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
                    {screenWidth <= 600 ? (
                        <Pagination lessons={course1?.lessons} setLessonId={setLessonId} id={lessonId}/>
                    ) :(
                        <div className={courseStyles.lessons_cont}>
                            {course1?.lessons.map(lesson => <Lesson onClick={() => setLessonId(lesson.id)} id={lessonId} lesson={lesson}/>)}
                        </div>)}
                    {/*}*/}
                    <div className={courseStyles.comments_cont}>
                        <h4 className={courseStyles.comments_title}>
                            {language === 'russian' && 'Комментарий'}
                            {language === 'kyrgyz' && 'Комментарий'}
                            {language === "o'zbekcha" && "Izoh"}
                        </h4>
                        <form onSubmit={formik.handleSubmit} className={courseStyles.comment_inp_cont}>
                            <button type='submit' className={courseStyles.comment_button}>{add_comment_text}</button>
                            <textarea value={formik.values.text} name='text' onChange={formik.handleChange} className={courseStyles.comments_input} placeholder={placeh_text} type="text"/>
                        </form>
                        {comments.map(comment => <Comments comment={comment}/>)}
                        <NavLink style={{ textDecoration: 'none',cursor: 'default' }} to='/comments'>
                            <Button text={commentb}/>
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
