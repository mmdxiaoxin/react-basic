import { useState } from 'react';

function UpdateInterface() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>更新界面</h1>
            <button onClick={handleClick}>点击按钮增加1</button>
            <h2>变量：{count}</h2>
        </div>
    );
}

export default UpdateInterface;
