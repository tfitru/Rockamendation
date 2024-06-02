import { Box, Button, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import background from "../images/pexels-michael-block-1691617-3225530.png";
import Header from './Header';

interface user {
    name: string,
    password: string
}

export const SignUp = () => {


    // TODO write functions to handle user interface
    // need textfield to validate name and password
    // then button needs to make sure username and password are good to go




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
      <Typography gutterBottom variant="h4" component="div">
          Make a new account
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="subtitle1" component="div">
          Please enter your username
          </Typography>
          <TextField id="standard-basic" label="Username" variant="standard" required inputProps={{ maxLength: 6 }}/>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="subtitle1" component="div">
          Please enter your password
          </Typography>
          <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          required type="password" 
          inputProps={{ maxLength: 8 }}/>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button type='submit' variant="contained">Sign-Up</Button>
        </Stack>
      </Box>
    </Card>  
  </Grid>
</Grid> 
  </div>
  </>
  )
}
