import React, {useState} from 'react';

import classes from './counter.module.scss';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
    );
};

export default Counter;
