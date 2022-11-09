import React, {useEffect} from 'react';
import aboutStyles from "../Styles/About.module.scss";
import courseStyles from "../Styles/Course.module.scss";
import Comments from "../components/Commets/Commets";
import Footer from "../components/Footer";

const AllComments = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
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
                        <Comments/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AllComments;
