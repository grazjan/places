import { Box, TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { useEffect } from 'react';
import { countries } from '../../constants/constants';
import { useLazyGetLocationQuery } from '../../features/geocodingSlice';


const Basic = ({ handleForm, formData, handleCoords }) => {

    /* Get location coords based on user input */
    const [ 
        getLocation,
        {data: coords,
        isLoading,
        isSuccess,
        isError
        }
    ] = useLazyGetLocationQuery();

    /* set coords */
    useEffect(() => {
        if(coords && coords.length && coords[0].lat && coords[0].lon) {
            const data = { 
                lat: coords[0].lat, 
                long: coords[0].lon, 
                country: coords[0].address.country 
            };
            handleCoords(data)
        }
    }, [coords])

    return (
        <>
        <Box component="form">
            <TextField
                name="title"
                label="Name"
                fullWidth
                sx={{ mb: 2 }}
                value={formData.title}
                onChange={handleForm}
                InputLabelProps={{ shrink: formData.title ? true : false }}
            />
            <Box display="flex" gap={2}>
                <TextField
                    name="city"
                    label="City"
                    fullWidth
                    defaultValue={formData.city}
                    onChange={handleForm}
                    onBlur={(e) => getLocation(e.target.value)}
                    InputLabelProps={{ shrink: formData.city ? true : false }}       
                />
                <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                        labelId="country-label"
                        name="country"
                        label="Country"
                        fullWidth
                        onChange={handleForm}   
                        value={formData.country}
                    >
                        {countries.map(country => (
                            <MenuItem key={country.code} value={country.name}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>    
        </Box>
        </>
    )
}

export default Basic