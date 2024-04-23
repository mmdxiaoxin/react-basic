import { useRef, useState } from 'react';
import { generateRandomEightDigitInteger } from '../../utils/index';
import CommentItem from './CommentItem';
import { ReactComponent as EmojiIcon } from '../../assets/images/CommentList/btn1.svg';
import { ReactComponent as AtSvg } from '../../assets/images/CommentList/btn2.svg';
import { ReactComponent as ImageSvg } from '../../assets/images/CommentList/btn3.svg';

function CommentWrap({ userInfo, setCommentsCount, commentsList, setCommentsList }) {
    const [contentValue, setContentValue] = useState('');
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);
    const inputRef = useRef(null);

    const handlePublish = () => {
        setCommentsList([
            ...commentsList,
            {
                rpid: generateRandomEightDigitInteger(),
                user: userInfo,
                content: contentValue,
                ctime: '2003-1-21',
                like: 0,
            },
        ]);
        setContentValue('');
        setCommentsCount(commentsList.length + 1);
        inputRef.current.focus();
    };

    const handleDel = () => {
        console.log('del');
    };

    return (
        <div className='reply-wrap'>
            {/* 发表评论 */}
            <div className='box-normal'>
                {/* 当前用户头像 */}
                <div className='reply-box-avatar'>
                    <div className='bili-avatar'>
                        <img className='bili-avatar-img' src={userInfo.avatar} alt='用户头像' />
                    </div>
                </div>
                <div className='reply-box-wrap'>
                    <div className='textarea-wrap'>
                        {/* 评论框 */}
                        <textarea
                            className='reply-box-textarea'
                            placeholder='发一条友善的评论'
                            ref={inputRef}
                            value={contentValue}
                            onChange={(e) => setContentValue(e.target.value)}
                            onFocus={() => setIsTextareaFocused(true)}
                        />
                    </div>
                </div>
            </div>
            <div className={`box-expand ${isTextareaFocused ? '' : 'hidden'}`}>
                <div className='box-left'>
                    <div className='reply-box-emoji'>
                        <EmojiIcon style={{ width: '16px', height: '16px' }} />
                    </div>
                    <div className='at-btn'>
                        <AtSvg style={{ width: '16px', height: '16px' }} />
                    </div>
                    <div className='image-btn'>
                        <ImageSvg style={{ width: '16px', height: '16px' }} />
                    </div>
                </div>
                {/* 发布按钮 */}
                <div className='reply-box-send' onClick={handlePublish}>
                    <div className='send-text'>发布</div>
                </div>
            </div>
            {/* 评论列表 */}
            <div className='reply-list'>
                {/* 评论项 */}
                {commentsList.map((comment) => (
                    <CommentItem
                        key={comment.rpid}
                        comment={comment}
                        userInfo={userInfo}
                        onDel={handleDel}
                    />
                ))}
            </div>
        </div>
    );
}

export default CommentWrap;
