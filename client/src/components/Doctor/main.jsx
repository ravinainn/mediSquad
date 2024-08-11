import React from 'react'
import DoctorDashboard from './DoctorDashboard'
import Nav from "../Home/nav"

const main = () => {
  return (
    <div className="bg-white w-screen h-screen overflow-hidden">
        <Nav />
        <DoctorDashboard/>
    </div>
  )
}

export default main

