import { Button } from "@mui/material";
import { useReducer } from "react";

const initailState = { count: 0 };

function reducer(state = initailState, action) {
  
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 };
        case "Decrease":
            if (state.count <= 0) {
                return state;
            }
            return { count: state.count - 1 };
        case 'Reset':
            return { count: 0 }
    }

}


function CounterReducer() {

    const [state, dispatcher] = useReducer(reducer, initailState);

    return (
        <>
            <h1>Counter : {state?.count}</h1>
            <Button onClick={() => dispatcher({ type: 'Increment' })}>Increment</Button>
            <Button onClick={() => dispatcher({ type: 'Decrease' })}>Decrease</Button>
            <Button onClick={() => dispatcher({ type: 'Reset' })}>Reset</Button>


        </>
    )
}

export default CounterReducer;