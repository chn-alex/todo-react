import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);

    /*function decr() {
        setCount((count > 0) ? count-1 : 0)
    }

    function incr() {
        setCount(count+1)
    }*/

    function clickCount(act) {
        if (act == '-') {
            setCount((count > 0) ? count-1 : 0)
        } else if (act == '+') {
            setCount(count+1)
        }
    }

    function resetCounter() {
        setCount(initialCount)
    }

    return (
        <div>
            Count: {count}
            <button onClick={ resetCounter }>Скинути</button>

            <button data-action="minus" onClick={ () => clickCount('-') }>-</button>
            <button data-action="plus" onClick={ () => clickCount('+') }>+</button>
        </div>
    );
}

export default App;
