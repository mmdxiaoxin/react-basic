import { useState } from 'react';

function UpdateInterface() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    //如果是对象
    const [form, setForm] = useState({ name: 'init' });
    const changeForm = () => {
        setForm({ ...form, name: 'change' });
    };
    return (
        <div>
            <h1>更新界面</h1>
            <button onClick={handleClick}>点击按钮增加1</button>
            <button onClick={changeForm}>点击修改对象</button>
            <h2>变量：{count}</h2>
            <h2>对象: {form.name}</h2>
        </div>
    );
}

export default UpdateInterface;
