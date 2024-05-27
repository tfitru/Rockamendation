import React from 'react'
import { Box, Card, Chip, Divider, Grid, Stack, ThemeProvider, Typography } from '@mui/material'
import './componentscss/Home.css'
import background from "../images/pexels-michael-block-1691617-3225530.png";


const Home = () => {

  return (
    <>
    <div className='home' style={{
      backgroundImage : `url(${background})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundAttachment: 'fixed'}}>
      <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}>
  <Grid item xs={3}>
  <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
          Welcome to Rockamendation! The site to find the next best climb
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
        Click here to Login
        </Typography>
        <Typography color="text.secondary" variant="body2">
        Click here to Sign-Up
        </Typography>
        <Typography color="text.secondary" variant="body2">
        Click here to be a <a href="/list"> guest </a>
        </Typography>
      </Box>
      <Divider />
    </Card>  
  </Grid>
</Grid> 
  </div>
  </>
  )
}

export default Home