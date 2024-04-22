function EventBinding() {
    const handleClick = () => {
        alert('点击事件');
    };
    return (
        <div className='EventBinding'>
            <h1>事件绑定</h1>
            <button onClick={handleClick}>点击事件</button>
        </div>
    );
}

export default EventBinding;
