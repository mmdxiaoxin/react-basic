import { useSelector } from 'react-redux';
import { decrement, increment } from '../store/modules/counterStore';
import { useDispatch } from 'react-redux';

function Counter() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>计数器</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>目标count:{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Counter;
