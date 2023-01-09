import { Box, Button, Container, IconButton, LinearProgress, Step, StepLabel, Stepper, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Basic from '../components/AddPlace/Basic';
import Description from '../components/AddPlace/Description';
import Media from '../components/AddPlace/Media';
import { useAddPlaceMutation } from '../features/apiSlice';


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
    const [isFilled, setIsFilled] = useState(false);

    const [formData, setFormData] = useState({ 
        title: '',
        city: '',
        country: '',
        countryCode: '',
        description: '',
        lat: '',
        long: '',
        images: []
    })

    useEffect(() => {
        const { title, city, country, description, images } = formData;
        if(title && city && country && description && images.length) {
            setIsFilled(true)
        } else {
            setIsFilled(false)
        }
    }, [formData])

    const [ 
       addPlace,
       {data: places,
       isLoading,
       isSuccess,
       isError
       }
    ] = useAddPlaceMutation();

    const navigate = useNavigate();

    const handleForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleUpload = (files) => {
        let imagesArr = formData.images;
        imagesArr.push(files);
        setFormData({ ...formData, images: imagesArr });
    }

    const handleCoords = (location) => {
        setFormData({
            ...formData,
            lat: location.lat,
            long: location.long,
            country: location.country
        })
    }

    const handleSubmit = () => {
        addPlace(formData)
    }

    return (
        <>
        
        <LinearProgress variant="determinate" value={ (100/steps.length) * currentStep.step}/>

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
            {/* Stepper components (medium devices only) */}
            <Box pt={4} pb={6} sx={{ display: { xs: "none", sm: "block" } }}>
                <Stepper activeStep={currentStep.step-1} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step.step}>
                            <StepLabel><strong>{step.label}</strong></StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Container>

        {/* Multistep form */}
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {currentStep.label === "Location" && <Basic formData={formData} handleForm={handleForm} handleCoords={handleCoords} />}
            {currentStep.label === "Description" && <Description formData={formData} handleForm={handleForm}/>}
            {currentStep.label === "Media" && <Media formData={formData} handleForm={handleForm} handleUpload={handleUpload} />}
        </Container>

         {/* Form buttons */}
         <Box textAlign="center" mt={10}>
            {currentStep.step !== steps[0].step && 
                <Button sx={{ mr: 2 }} variant='outlined' onClick={() => setCurrentStep(steps[currentStep.step-2])} basi >Previous Step</Button>
            }
            {currentStep.step !== steps[steps.length-1].step && 
                <Button variant='contained' onClick={() => setCurrentStep(steps[currentStep.step])}>Next step</Button>
            }
            {currentStep.step == steps.length &&
                <Button variant="contained" disabled={!isFilled} onClick={handleSubmit}>
                    Add place
                </Button>
            }    
        </Box>

        </>
    )
}

export default Create