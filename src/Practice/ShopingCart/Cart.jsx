import { Box, Button, Typography } from "@mui/material";
import { initalState } from "./reducerFunction";



function Cart({ state = initalState, dispatch }) {
    return (
        <Box>
            <h2>Cart</h2>
            {state.map((e) => (
                <Box sx={{ background: "white", height: 200, width: 300, mt: 2 }}>
                    <>
                        <Typography>{e.productName}</Typography>
                        <Typography>Item price : {e.price}</Typography>
                        <Typography>Toatal price : {e.price * e.quantity}</Typography>
                        <Typography>Toatal Quantity : {e.quantity}</Typography>



                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                            <Button sx={{ backgroundColor: 'lightblue' }} onClick={() => dispatch({type: "inc", product: e})}>+</Button>
                            <Button sx={{ backgroundColor: 'lightblue' }} onClick={() => dispatch({type: "dec", product: e})}>-</Button>
                            <Button sx={{ backgroundColor: 'lightblue' }} onClick={() => dispatch({type: "rem", product: e})}>Remove</Button>
                        </Box>
                    </>
                </Box>
            ))}
        </Box>
    )
}

export default Cart;