import { Input, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react'

export default function SearchFilter() {

    const [userData, setUserData] = useState([]);
    const [searchValue, setSearchValue] = useState([]);



    useEffect(() => {
        const getUserData = async () => {
            try {
                const reponse = await axios.get('https://jsonplaceholder.typicode.com/users')

                setUserData(reponse?.data)

            } catch (error) {
                console.error(error)
            }
        }
        getUserData()
    }, [])


    const searchedUserList = useMemo(() => {
        if (searchValue != '') {
            return userData.filter((e) => e.name?.toLowerCase().includes(searchValue?.toLowerCase()))
        } else {
            return userData;
        }

    }, [searchValue, userData])


    return (
        <>
            <div>Search Filter</div>
            <Input placeholder='Search Users' value={searchValue} type='text' onChange={(e) => setSearchValue(e.target.value)} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            User Name
                        </TableCell>
                        <TableCell>
                            User Email
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchedUserList?.map((e) => (
                        <TableRow>
                            <TableCell>
                                {e.name}
                            </TableCell>
                            <TableCell>
                                {e.username}
                            </TableCell>
                            <TableCell>
                                {e.email}
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </>

    )
}
