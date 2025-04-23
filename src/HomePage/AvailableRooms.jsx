import React from 'react'
import RoomDescriptionTable from './RoomDescriptionTable'

function AvailableRooms({rooms, startDate, endDate}) {
  return (
    <>
        <h1>Available Rooms</h1>
        <RoomDescriptionTable rooms={rooms} startDate={startDate} endDate={endDate} />
    </>
  )
}

export default AvailableRooms