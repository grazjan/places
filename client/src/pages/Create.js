import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPlace from '../components/AddPlace/AddPlace'
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';
import Basic from '../components/AddPlace/Basic';
import Description from '../components/AddPlace/Description';
import Media from '../components/AddPlace/Media';


const StyledGoBack = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: theme.spacing(1),
    left: theme.spacing(1)
}))

const steps = [
    { step: 1, label: "Location" }, 
    { step: 2, label: "Description" }, 
    { step: 3, label: "Media" }
]

const Create = () => {

    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [formData, setFormData] = useState({ 
        name: '',
        city: '',
        country: '',
        countryCode: '',
        description: '',
        visited: '',
    })

    const navigate = useNavigate();

    const handleForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
        <StyledGoBack>
            <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon fontSize="large"/>
            </IconButton>
        </StyledGoBack>
        <Container>
            <Box textAlign="center" pt={10}>
                <Typography variant="h4" component="h1">
                    Add new place
                </Typography>
            </Box>
        </Container>
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {currentStep.label === "Location" && <Basic formData={formData} handleForm={handleForm}/>}
            {currentStep.label === "Description" && <Description formData={formData} handleForm={handleForm}/>}
            {currentStep.label === "Media" && <Media formData={formData} handleForm={handleForm}/>}
        </Container>
         {/* Form controls */}
         <Box textAlign="center" mt={10}>
            {currentStep.step !== steps[0].step && 
                <Button sx={{ mr: 2 }} variant='outlined' onClick={() => setCurrentStep(steps[currentStep.step-2])}>Previous Step</Button>
            }
            {currentStep.step !== steps[steps.length-1].step && 
                <Button variant='contained' onClick={() => setCurrentStep(steps[currentStep.step])}>Next step</Button>
            }
        </Box>
        </>
    )
}

export default Create