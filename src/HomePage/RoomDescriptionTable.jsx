import React from 'react'

function RoomDescriptionTable({ room }) {
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
            <tr>
                <td>
                    <h3>{room.roomType}</h3>
                    <p>{room.description}</p>
                </td>
                <td>{room.price}</td>
                <td>
                    <button> book </button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default RoomDescriptionTable