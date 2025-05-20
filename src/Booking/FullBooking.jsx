import React from 'react'
import { Outlet } from 'react-router'

function FullBooking() {
  return (
    <div className='full-booking'>
        <Outlet />
    </div>
  )
}

export default FullBooking