import styled from '@emotion/styled'
import { Box, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

const StyledTextArea = styled(TextareaAutosize)({
    width: "100%",
    resize: "none"
})

const Description = ({ handleForm, formData }) => {
  return (
    <Box component="form">
        <TextField 
            aria-label="Description"
            placeholder='Describe visited place...'
            name="description"
            label="Description"
            autoFocus
            value={formData.description}
            onChange={handleForm}
            fullWidth
            multiline
            rows={8}
        />
    </Box>
  )
}

export default Description