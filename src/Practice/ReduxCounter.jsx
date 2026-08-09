import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice';

export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <Typography>{count}</Typography>
            <Button onClick={()=>dispatch(increment())}>+</Button>
            <Button onClick={()=>dispatch(decrement())}>-</Button>

        </div>
    )
}
