import { useEffect, useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';


function PaginationTable() {

    const [tableData, setTableData] = useState([]);
    const [getData, setGetData] = useState({ offset: 0, limit: 10 })



    const handleButtonClick = (action) => {
        if (action === 'next') {
            setGetData({ ...getData, offset: getData?.offset + 10 })
        } else if (action === 'prev') {
            setGetData({ ...getData, offset: getData?.offset - 10 })
        }

    }

    useEffect(() => {
        const callAPI = async () => {
            try {
                const { offset, limit } = getData;
                if (offset < 0) {
                    alert("Na soneya")
                    setTableData(tableData)
                } else {
                    const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`);
                    setTableData(res?.data)
                }

            } catch (error) {
                console.error(error);

            }
        }

        callAPI()

    }, [getData])

    console.log("tableData", tableData);


    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Pagination Table
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>

                        <TableCell>title</TableCell>
                        <TableCell>price</TableCell>
                        <TableCell>description</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.map((e) => (
                        <TableRow>
                            <TableCell>{e.id}</TableCell>

                            <TableCell>{e.title}</TableCell>
                            <TableCell>{e.price}</TableCell>
                            <TableCell>{e.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>


                <TableFooter sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <Button onClick={() => handleButtonClick('prev')}> Prev</Button>
                    <Button onClick={() => handleButtonClick('next')}> Next</Button>

                </TableFooter>
            </Table>
        </Box>
    )
}

export default PaginationTable;