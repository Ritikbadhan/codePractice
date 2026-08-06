import { Input, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

function ReactDebounced() {
    const [inputValue, setInputValue] = useState('');
    const [triggredValue, setTriggeredValue] = useState('')



    const handleInputChange = useCallback((value) => {
        setInputValue(value)
    }, [])


    useEffect(() => {

        const timmer = setTimeout(() => {
            setTriggeredValue(inputValue)
        }, 500)

        return () => clearTimeout(timmer)
    }, [inputValue])






    return (<>
        <h3>React Debounced</h3>

        <Input
            placeholder="Value"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
        />
        <Typography sx={{ mt: 3 }}>{triggredValue}</Typography>
    </>)
}

export default ReactDebounced;