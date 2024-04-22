const articleType = 1;

function getArticle() {
    if (articleType === 0) {
        return <div>无图模式</div>;
    } else if (articleType === 1) {
        return <div>单图模式</div>;
    } else {
        return <div>三图模式</div>;
    }
}

function ConditionRenderingStudy() {
    return (
        <div className='ConditionRenderingStudy'>
            <h1>条件渲染</h1>
            {getArticle()}
        </div>
    );
}

export default ConditionRenderingStudy;
