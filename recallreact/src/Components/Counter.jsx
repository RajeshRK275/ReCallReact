import { useState } from "react"

export default function Counter(){
    const[count,setCount] = useState(0);
    const[incrementBy,setIncrementBy] = useState(1);


    function handleIncrement(){
        setCount(count + incrementBy);
    }

    function handleDecrement(){
        setCount(count - incrementBy);
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }

    function decreaseIncrement(){
        setIncrementBy(incrementBy - 1);
    }

    return(
        <div>
            <h1> The count is : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Increase or Decerease By : {incrementBy}</h1>
            <button onClick={increaseIncrement}>Increment</button>
            <button onClick={decreaseIncrement}>Decrement</button>
        </div>
    )
}