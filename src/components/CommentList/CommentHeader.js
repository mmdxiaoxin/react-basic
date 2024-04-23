import { useState } from 'react';

const tabs = [
    { type: 'hot', text: '最热' },
    { type: 'time', text: '最新' },
];

function CommentHeader({ commentsCount, setCommentList }) {
    const [type, setType] = useState('hot');
    const handleTabChange = (type) => {
        setType(type);
        // 基于列表的排序
        if (type === 'hot') {
            // 根据点赞数量排序
            // lodash
            // setCommentList(_.orderBy(commentList, 'like', 'desc'));
        } else {
            // 根据创建时间排序
            // setCommentList(_.orderBy(commentList, 'ctime', 'desc'));
        }
    };

    return (
        <div className='reply-navigation'>
            <ul className='nav-bar'>
                <li className='nav-title'>
                    <span className='nav-title-text'>评论</span>
                    {/* 评论数量 */}
                    <span className='total-reply'>{commentsCount}</span>
                </li>
                <li className='nav-sort'>
                    {/* 高亮类名： active */}
                    {tabs.map((item) => (
                        <span
                            key={item.type}
                            onClick={() => handleTabChange(item.type)}
                            className={`nav-item ${type === item.type ? 'active' : ''}`}>
                            {item.text}
                        </span>
                    ))}
                </li>
            </ul>
        </div>
    );
}

export default CommentHeader;
