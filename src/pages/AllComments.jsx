import React, {useEffect} from 'react';
import aboutStyles from "../Styles/About.module.scss";
import courseStyles from "../Styles/Course.module.scss";
import Comments from "../components/Commets/Commets";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getComments, getCourse} from "../api/course";

const AllComments = () => {


    const {comments} = useSelector(state => state.course)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getComments())
    }, [])

    return (
        <div>
            <div className={`${aboutStyles.banner} ${courseStyles.banner}`}>
                {/*<img className={aboutStyles.banner_image} alt="/"></img>*/}
                <h1 className={aboutStyles.mainTitle}>Курс “Бизнес с 0”</h1>
            </div>
            <div className={courseStyles.content_bg}>
                <div className='container'>
                    <div className={courseStyles.all_comments_cont}>
                        <h4 className={courseStyles.comments_title}>Комментарий</h4>
                        {comments.map(comment => <Comments comment={comment}/>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AllComments;
