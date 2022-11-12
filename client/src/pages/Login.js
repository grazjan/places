import { Box, Grid } from '@mui/material'
import Image from 'mui-image'
import Auth from '../components/Auth/Auth';
import LoginBg from '../images/bg-login.jpg';
import Logo from '../images/logo-no-background.png';

const Login = () => {
  return (
    <Box>
        <Grid container sx={{ height: "100vh" }}>
            <Grid item md={5}>
                <Box pt={15} sx={{ display: "flex", flexDirection: "column" , justifyContent: "center", alignItems: "center" }}>
                    <Image src={Logo} alt="Places logo" width="240px" height="auto" />
                    <Auth/>
                </Box>
            </Grid>
            <Grid item md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ position: "relative", height: "100%" }}>
                    <Image src={LoginBg} alt="Login Page" />
                    <Box sx={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(0, 0, 0, 0.4)" }}/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Login