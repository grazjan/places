import styled from '@emotion/styled'
import { Box, Button, Link, TextField, Typography } from '@mui/material'
import Google from '@mui/icons-material/Google';
import { useState } from 'react'

/* styled */
const StyledForm = styled('form')(({ theme }) => ({
  padding: theme.spacing(7),
  width: "85%",
  '& .MuiTextField-root': {
    margin: `${theme.spacing(1)} 0`
  },
  '& .MuiLink-root': {
    cursor: "pointer",
  },
  '& .MuiButtonBase-root': {
    marginTop: `${theme.spacing(2)}`,
    width: "100%"
  }
}))

const Auth = () => {

  const [formData, setFormData] = useState({ username: '', mail: '', password: '', confirmpw: '' })
  const [isSigningIn, setSigningIn] = useState(true)

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <StyledForm
      component="form"
      noValidate
    >

      {/* Sign in form */}
      <TextField 
        required
        name="username"
        value={formData.username}
        label={isSigningIn ? "Email or Username" : "Username"}
        onChange={handleForm}
        fullWidth
      />
      {!isSigningIn && 
        <TextField 
          required
          name="mail"
          type="email"
          value={formData.mail}
          label="Email"
          onChange={handleForm}
          fullWidth
        />
      }
      <TextField 
        required
        type="password"
        name="password"
        value={formData.passowrd}
        label="Password"
        onChange={handleForm}
        fullWidth
      />
      {!isSigningIn && 
        <TextField 
          required
          type="password"
          name="confirmpw"
          value={formData.confirmpw}
          label="Confirm Password"
          onChange={handleForm}
          fullWidth
        />
      }
      <Box>
        <Typography variant="body2">
          {isSigningIn ? 'Dont have an Account?' : 'Already have an Account?'}
          <Link onClick={() => setSigningIn(!isSigningIn)}>{isSigningIn ? 'Sign up' : 'Sign in'}</Link>
        </Typography>
      </Box>
      <Button variant="contained">
        {isSigningIn ? 'Sign up' : 'Sign in'}
      </Button>
      {/* <Button variant="outlined" startIcon={<Google />}>
        Google
      </Button> */}
    </StyledForm>
  )
}

export default Auth