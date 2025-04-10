import React from 'react'

function Book() {
  return (
    <form action="">
        <label htmlFor="firstName">
            First Name : <input type="text" id="firstName" name="firstName" />
        </label>
        <label htmlFor="lastName">
            Last Name : <input type="text" id="lastName" name="lastName" />
        </label>
        <label htmlFor="email">
            Email : <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="phone">
            Phone : <input type="tel" id="phone" name="phone" />
        </label>

        {/* Add code for stripe integration here */}

        <button type="submit">Book</button>
    </form>
  )
}

export default Book