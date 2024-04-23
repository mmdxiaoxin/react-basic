//root -> A -> B

import { createContext, useContext } from 'react';

const MsgContext = createContext();

function A() {
    return (
        <div>
            this is A component
            <B />
        </div>
    );
}

function B() {
    const msg = useContext(MsgContext);
    return <div>this is B component, {msg}</div>;
}

function ContextStudy() {
    const msg = 'this is root msg';
    return (
        <div>
            <h1>跨层传递</h1>
            <MsgContext.Provider value={msg}>
                this is root
                <A />
            </MsgContext.Provider>
        </div>
    );
}

export default ContextStudy;
