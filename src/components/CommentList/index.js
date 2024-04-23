import './index.scss';
import CommentHeader from './CommentHeader';
import CommentWrap from './CommentWrap';
import avatar from '../../assets/images/test01.png';
import { useState } from 'react';

const user = {
    uid: '30541316545',
    avatar,
    uname: '小新',
};

const list = [
    { rpid: 745274521, user: user, content: '这是一条评论!', ctime: '2003-1-21', like: 12 },
];

function CommentList() {
    const [commentsCount, setCommentsCount] = useState(1);
    const [commentsList, setCommentsList] = useState(list);
    const [userInfo] = useState(user);

    return (
        <div className='comment-list'>
            <CommentHeader commentsCount={commentsCount} />
            <CommentWrap
                userInfo={userInfo}
                commentsList={commentsList}
                setCommentsCount={setCommentsCount}
                setCommentsList={setCommentsList}
            />
        </div>
    );
}

export default CommentList;
