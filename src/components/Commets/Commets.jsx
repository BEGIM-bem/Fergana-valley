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


    const user = users?.find(user => user.id == comment.user)
    console.log('userIddd: ', user)
    return (
        <div className={commentsStyles.coments_cont}>
            <p className={commentsStyles.comment_username}>{user?.fullname} |{comment.created_at}</p>
            <p className={commentsStyles.usertext_cont}>{comment.text}</p>
            <br/>
            <p className={commentsStyles.comment_adminname}>Админ</p>
            <p className={commentsStyles.admintext_cont}>Учитывая ключевые сценарии поведения, начало повседневной работы по формированию позиции в значительной степени обусловливает важность приоретизации разума над эмоциями. Лишь ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут в равной степени предоставлены сами себе.</p>
        </div>
    );
};

export default Comments;
