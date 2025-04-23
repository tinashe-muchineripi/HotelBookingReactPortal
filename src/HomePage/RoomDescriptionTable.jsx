import React from 'react'
import { NavLink } from 'react-router'

function RoomDescriptionTable({ rooms, startDate, endDate }) {
    let roomDescription = rooms.map((room) => 
        <tr key={room.id}>
                <td>
                    <h3>{room.title}</h3>
                    <p>{room.description}</p>
                </td>
                <td>{room.price}</td>
                <td>
                    <NavLink 
                        to="book"
                        state={{
                            room: room.id,
                            startDate: startDate,
                            endDate: endDate
                        }}>
                     book 
                    </NavLink>
                </td>
            </tr>
            )
  return (
    <table>
        <thead>
            <tr>
                <th>Room Description</th>
                <th>Price</th>
                <th>Booking Info</th>
            </tr>
        </thead>
        <tbody>
           {roomDescription}
        </tbody>
    </table>
  )
}

export default RoomDescriptionTable