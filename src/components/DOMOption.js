import { useRef } from 'react';

function DOMOption() {
    const inputRef = useRef(null);
    const showDom = () => {
        console.dir(inputRef.current);
    };

    return (
        <div>
            <h1>DOM操作</h1>
            <input type='text' ref={inputRef} />
            <button onClick={showDom}>获取DOM</button>
        </div>
    );
}

export default DOMOption;
