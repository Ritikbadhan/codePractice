import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const initialData = {
    email: null,
    phone: null,
    name: null
}

function ContactFormWithUseState() {

    const [formData, setFormData] = useState(initialData);

    const handleformchange = (input, e) => {
        // console.log(input, value);

        const value = e.target.value;

        setFormData((prev) => ({
            ...prev, [input]: value
        }))


    }
    
    function handleSubmit (){
        console.log(formData);
        
    }
    return (
        <>
            <Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Typography> Name : </Typography>
                    <Input value={formData?.name} type="text" onChange={(e) => { handleformchange("name", e) }} />
                </Grid>

                <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Typography> Phone : </Typography>
                    <Input value={formData?.phone} type="number" onChange={(e) => { handleformchange("phone", e) }} />
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Typography> Email : </Typography>
                    <Input value={formData?.email} type="text" onChange={(e) => { handleformchange("email", e) }} />
                </Grid>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
            </Grid>
        </>
    )

}

export default ContactFormWithUseState;