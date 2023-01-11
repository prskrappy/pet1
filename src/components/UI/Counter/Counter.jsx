import React, {useState} from "react";
import classes from "./Counter.module.css";

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <button className={classes.btn} onClick={increment}>like</button>
            <button className={classes.btn} onClick={decrement}>dislike</button>
            <strong className={classes.text}>{count}</strong> 
        </div>
    )
}

export default Counter;
//почему не меняется размер шрифта в <h4 style={{fontsize: '10px'}}>{count}</h2>