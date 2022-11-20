import { Box, TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { countries } from '../../constants/constants';


const Basic = ({ handleForm, formData }) => {
  return (
    <>
    <Box>
        
    </Box>
    <Box component="form">
        <TextField
            name="name"
            label="Name"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.name}
            onChange={handleForm}
            InputLabelProps={{ shrink: formData.name ? true : false }}
        />
        <Box display="flex" gap={2}>
            <TextField
                name="city"
                label="City"
                fullWidth
                defaultValue={formData.city}
                onChange={handleForm}
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