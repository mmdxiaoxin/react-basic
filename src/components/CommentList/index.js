import './index.scss';
import CommentHeader from './CommentHeader';
import CommentWrap from './CommentWrap';
import { useState } from 'react';

const user = {
    uid: '30541316545',
    avatar: 'https://th.bing.com/th/id/OIP.6KD1E_5WqcLOnoI3OcdCzAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain',
    uname: '小新',
};

const list = [{ rpid: 1, user: user, content: '这是一条评论!', ctime: '2003-1-21', like: 12 }];

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
