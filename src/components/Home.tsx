import React from 'react'

const Home = () => {

    // Each of the press here will be a route
    // send to Login for a username and password
    // send to sign-in to create a username and password
    // send them to the main page as a guest with no account

  return (

    <div>
        <h1>Welcome to Rockamendation!</h1>
        <h2>The site to find the next best climb</h2>
        <p>Press here to Login</p>
        <p>Press here to Sign-In</p>
        <p>Press here to be a guest</p>
        </div>
  )
}

export default Home