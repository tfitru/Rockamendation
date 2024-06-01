import { Box, Button, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import background from "../images/pexels-michael-block-1691617-3225530.png";
import Header from './Header';


export const SignUp = () => {






  return (
    <>
    <div
    style={{
        position: 'sticky',
        top: 0,
        overflow: 'hidden'}}><Header/></div>
    <div className='home' style={{
      backgroundImage : `url(${background})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      }}>
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
          <Typography gutterBottom variant="subtitle1" component="div">
          Please enter your username
          </Typography>
          <TextField id="standard-basic" label="Username" variant="standard" />
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="subtitle1" component="div">
          Please enter your password
          </Typography>
          <TextField id="standard-basic" label="Password" variant="standard" />
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="contained">Contained</Button>
        </Stack>
      </Box>
    </Card>  
  </Grid>
</Grid> 
  </div>
  </>
  )
}
