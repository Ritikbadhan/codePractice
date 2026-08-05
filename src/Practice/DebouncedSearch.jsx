import { Box, Input, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"


export default function DebouncedSearch() {
    // const [userData, setUserData] = useState();
    const [searchValue, setSearchValue] = useState('');

    // useEffect(() => {
    //     const getUserData = async () => {

    //         try {

    //             const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    //             console.log(res?.data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }

    //     getUserData()

    // }, [])

    // function debounce(callBack, delay = 500) {
    //     let timmer = '';

    //     return function (...arg) {
    //         clearTimeout(timmer)
    //         timmer = setTimeout(() => {
    //             callBack(...arg)
    //         }, delay)
    //     }
    // }


    useEffect(() => {

        const timmer = setTimeout(async () => {
            try {

                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                const filteredData = res?.data?.filter((e)=>{e.name.toLowerCase().includes(searchValue?.toLowerCase)})
                console.log(filteredData);
                
            } catch (error) {
                console.error(error)
            }

        }, 500)

       return ()=> clearTimeout(timmer);
    }, [searchValue])



    return (<>
        <Box>
            <h1>Debounced Search</h1>
            <Input placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Box>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>

                </TableRow>
            </TableBody>
        </Table>
    </>)
}