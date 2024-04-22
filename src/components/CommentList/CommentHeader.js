function CommentHeader({ commentsCount }) {
    return (
        <div className='reply-header'>
            <div className='reply-navigation'>
                <ul className='nav-bar'>
                    <li className='nav-title'>
                        <span className='nav-title-text'>评论</span>
                        <span className='total-reply'>{commentsCount}</span>
                    </li>
                    <li className='nav-sort'>
                        <div className='hot-sort'>最热</div>
                        <div className='part-symbol'></div>
                        <div className='time-sort'>最新</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CommentHeader;
