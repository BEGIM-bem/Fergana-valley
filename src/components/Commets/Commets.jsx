import React, {useEffect} from 'react';
import commentsStyles from './Comments.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/usersSlice";

const Comments = ({comment}) => {

    const dispatch = useDispatch()

    const {users} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const { language } = useSelector(state => state.localization)

    const user = users?.find(user => user.id === comment.user)
    console.log('userIddd: ', user)
    return (
        <div className={commentsStyles.coments_cont}>
            <p className={commentsStyles.comment_username}>{user?.fullname} |{comment.created_at}</p>
            <p className={commentsStyles.usertext_cont}>{comment.text}</p>
            <br/>
            {
                comment.answer && (
                    comment.answer.map(ad_answer => {
                        return <>
                            <p className={commentsStyles.comment_adminname}>
                                {language === 'russian' && 'Админ'}
                                {language === 'kyrgyz' && 'Админ'}
                                {language === "o'zbekcha" && "Admin"}
                            </p>
                            <p className={commentsStyles.admintext_cont}>{ad_answer.answer}</p>
                        </>
                    })

                )
            }
        </div>
    );
};

export default Comments;
