import { Box, Button, Typography } from "@mui/material"

function ProductList({data = [], dispatch =()=>{}}) {

    return (<>

        <Box>
        <h3>Products</h3>
            {data.map((e) => (
                <>
                    <Box sx={{ m: 2, backgroundColor: 'white', height: 150, width: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Typography>{e.productName}</Typography>
                        <Typography>{e.price}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
                            <Button sx={{ height: 30, background: 'lightgrey' }} onClick={()=>dispatch({type: "addToCart", product: e})}>Add to Cart</Button>
                        </Box>

                    </Box>
                </>
            ))}
        </Box>

    </>)
}

export default ProductList