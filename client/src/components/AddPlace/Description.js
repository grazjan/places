import styled from '@emotion/styled'
import { Box, TextareaAutosize } from '@mui/material'
import React from 'react'

const StyledTextArea = styled(TextareaAutosize)({
    width: "100%",
    resize: "none"
})

const Description = ({ handleForm, formData }) => {
  return (
    <Box component="form">
        <StyledTextArea 
            aria-label="Description"
            placeholder='Describe visited place...'
            name="description"
            autoFocus
            defaultValue={formData.description}
            onChange={handleForm}
            minRows={10}
        />
    </Box>
  )
}

export default Description