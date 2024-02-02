import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Layout/Navigation/Navigation'

const Homepage = () => {

  return (

    <>  
        <Navigation></Navigation>
        <Outlet></Outlet>
    </>
  )
}

export default Homepage