import { Box, Button, ListItem, Typography } from "@mui/material";
import { accordianData } from "./accordianData";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";





function Accordian() {
    const [openList, setOpenList] = useState(null);



    const handleIconClick = (id) => {
        const openNestedList = openList === id ? null : id;
        setOpenList(openNestedList)

    }



    return (
        <>
            <h2>Accordian</h2>
            <Box sx={{ width: 250 }}>

                {accordianData.map(e => (
                    <>
                        <ListItem sx={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
                            <Typography>{e.name}</Typography> <Button onClick={() => handleIconClick(e.id)}><ArrowDropDownIcon /></Button>
                        </ListItem>
                        {
                            e.value?.length && e.id === openList ? (<>
                                {e?.value.map((ne, index) => (
                                    <ListItem sx={{ backgroundColor: "lightblue" }}>
                                        <Typography sx={{ color: "black" }}>{index + 1}. {ne}</Typography>
                                    </ListItem>
                                ))}
                            </>) : (<>

                            </>)
                        }
                    </>
                ))}

            </Box>
        </>
    )

}

export default Accordian; 