import React, {useState}  from 'react'
import { useLocation, NavLink } from 'react-router';

function Book() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const {state} = useLocation();
    console.log(state)
  return (
    <form action="" className='booking-form'>
        <label htmlFor="firstName">
            First Name : <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
        </label>
        <label htmlFor="lastName">
            Last Name : <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            onChange={(e) => setLastName(e.target.value)}
                        />
        </label>
        <label htmlFor="email">
            Email : <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
        </label>
        <label htmlFor="phone">
            Phone : <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        onChange={(e) => setPhone(e.target.value)}
                    />
        </label>

        {/* Add code for stripe integration here */}
        <NavLink
         to="stripe"
         state={{
            "startDate": state.startDate,
            "endDate": state.endDate,
            "roomTypeId": state.room,
            "person": {
                    "firstName": firstName,
                    "lastName": lastName,
                    "emailAddress": email,
                    "phoneNo": phone
                }

         }}
        >
            Continue to Payment
        </NavLink>
    </form>
  )
}

export default Book