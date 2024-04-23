import { useState } from 'react';
import { generateRandomEightDigitInteger } from '../../utils/index';

function CommentWrap({ userInfo, setCommentsCount, commentsList, setCommentsList }) {
    const [contentValue, setContentValue] = useState('');

    const handleSend = () => {
        const length = commentsList.length;
        const newComment = {
            rpid: generateRandomEightDigitInteger(),
            user: userInfo,
            content: contentValue,
            ctime: '2003-1-21',
            like: 12,
        };
        commentsList.push(newComment);
        setCommentsList(commentsList);
        setCommentsCount(length);
    };

    return (
        <div className='reply-wrap'>
            <div className='main-reply-box'>
                <div className='box-normal'>
                    <div className='reply-box-avatar'>
                        <img src={userInfo.avatar} alt={userInfo.uname} />
                    </div>
                    <div className='reply-box-wrap'>
                        <div className='textarea-wrap'>
                            <textarea
                                className='reply-box-textarea'
                                placeholder='你猜我的评论区再等谁？'
                                value={contentValue}
                                onChange={(e) => setContentValue(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='box-expand'>
                    <div className='box-left'>
                        <div>😊</div>
                        <div>@</div>
                        <div>🖼</div>
                    </div>
                    <div className='reply-box-send'>
                        <div className='send-text' onClick={handleSend}>
                            发布
                        </div>
                    </div>
                </div>
            </div>
            <div className='reply-list'>
                {commentsList.map((comment) => (
                    <div key={comment.rpid}>
                        <div className='reply-item'>
                            {/**
                             * 头像
                             */}
                            <div className='root-reply-avatar'>
                                <div className='bili-avatar'>
                                    <img className='bili-avatar-img' alt='' src={comment.user.avatar} />
                                </div>
                            </div>

                            <div className='content-wrap'>
                                <div className='user-info'>
                                    <div className='user-name'>{comment.user.uname}</div>
                                </div>

                                <div className='root-reply'>
                                    <span className='reply-content'>{comment.content}</span>
                                    <div className='reply-info'>
                                        <span className='reply-time'>{comment.ctime}</span>
                                        <span className='reply-time'>点赞数量:{comment.like}</span>
                                        <span className='delete-btn' style={{ color: '#e3e5e7' }}>
                                            删除
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-line'></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentWrap;
