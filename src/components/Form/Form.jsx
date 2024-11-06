import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";

const Form = ({ onClick, formValues }) => {
    const [localFormState, setLocalFormState] = useState({
        ...formValues
    });

    const handleInputChange = (key, value) => {
        setLocalFormState((prevState) => {
            return {
                ...prevState,
                [key]: +value
            }
        })
    }
    
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px'
                }}>
                <TextField
                    size="small"
                    fullWidth
                    type="number"
                    id=""
                    value={localFormState.initialInvestment}
                    onChange={() => handleInputChange('initialInvestment', event.target.value)}
                    label="Initial Investment"
                    variant="outlined" />

                <TextField
                    fullWidth
                    size="small"
                    type="number"
                    id=""
                    onChange={() => handleInputChange('annualInvestment', event.target.value)}
                    value={localFormState.annualInvestment}
                    label="Annual Investment"
                    variant="outlined" />
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    gap: '10px',
                    mt: 1
                }}>
                <TextField
                    fullWidth
                    size="small"
                    type="number"
                    onChange={() => handleInputChange('expectedReturn', event.target.value)}
                    value={localFormState.expectedReturn}
                    id=""
                    label="Expected Return"
                    variant="outlined" />

                <TextField
                    fullWidth
                    size="small"
                    type="number"
                    onChange={() => handleInputChange('duration', event.target.value)}
                    id=""
                    value={localFormState.duration}
                    label="Duration"
                    variant="outlined" />
            </Box>
            <Container
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 1
                }}>
                <Button
                    onClick={() => onClick(localFormState)}
                    variant="contained">Calculate</Button>
            </Container>
        </>
    )
}

export default Form;