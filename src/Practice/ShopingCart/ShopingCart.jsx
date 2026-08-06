import { Box,  } from "@mui/material";
import { useReducer } from "react";
import ProductList from "./Products";
import { data } from "./data";
import { initalState, reducerFunction } from "./reducerFunction";
import Cart from "./Cart";


function ShopingCart() {
    const [state, dispatch]= useReducer(reducerFunction, initalState)
console.log(state);

    return (<>
        <Box sx={{display:'flex', flexDirection:'row'}}>

            <ProductList data={data} dispatch={dispatch}></ProductList>
            <Cart state={state} dispatch={dispatch}/>
        </Box>
    </>)

}
export default ShopingCart;

