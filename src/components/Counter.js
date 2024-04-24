import { useSelector } from 'react-redux';
import { decrement, increment, addToNum } from '../store/modules/counterStore';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Counter() {
    const { count } = useSelector((state) => state.counter);
    const [addNum, setAddNum] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <h1>计数器</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>目标count:{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <input type='number' value={addNum} onChange={(e) => setAddNum(e.target.value)} />
            <button onClick={() => dispatch(addToNum(parseInt(addNum)))}>设置</button>
        </div>
    );
}

export default Counter;
