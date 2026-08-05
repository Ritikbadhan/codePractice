import { Box, Button, Typography } from "@mui/material";

const data = [
    {
        id: 0,
        productName: "Product 1",
        price: 100
    },
    {
        id: 2,
        productName: "Product 2",
        price: 200
    },
    {
        id: 3,
        productName: "Product 3",
        price: 300
    }
]


function ShopingCart() {

    return (<>
        <Box>

            <ProductList></ProductList>
        </Box>
    </>)

}
export default ShopingCart;

function ProductList() {

    return (<>

        <h3>Products</h3>
        <Box>
            {data.map((e) => (
                <>
                    <Box sx={{ m: 2, backgroundColor: 'white', height: 150, width: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Typography>{e.productName}</Typography>
                        <Typography>{e.price}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
                            <Button sx={{ height: 30, background: 'grey' }}>+</Button>
                            <Button sx={{ height: 30, background: 'grey' }}>-</Button>
                        </Box>

                    </Box>
                </>
            ))}
        </Box>

    </>)
}
