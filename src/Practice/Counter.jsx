import { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0);

    const handleCounterClick = (action) => {

        if (counter <= 0 && action === "decrement") {
            return alert("nhi honi")
        }
        /// if else

        if (action === 'increment') {
            setCounter((prev) => prev + 1)
        } else if (action === 'decrement') {
            setCounter((prev) => prev - 1)
        } else if (action === 'reset') {
            setCounter(0)
        }
    }


    return (
        <>
            <h1>Counter APP</h1>
            <h3>Counter {counter}</h3>

            <button onClick={() => handleCounterClick('increment')}> Increment</button>
            <button onClick={() => handleCounterClick('decrement')}> decrement</button>
            <button onClick={() => handleCounterClick('reset')}> Reset</button>

        </>
    )

}
export default Counter;