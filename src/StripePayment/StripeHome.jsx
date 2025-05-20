import {useEffect, useState} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router'
import Checkout from './Checkout'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); 

function StripeHome() {

    const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('https://hotelbooking-f8gwf6c7e6c3h3bv.uksouth-01.azurewebsites.net/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "items" : [{
            "id": 10,
            "amount": 1000
          }]})
        });

        if(!response.ok) {
          throw new Error('Response Status', response.status);
        }

        const data = await response.json();
        setClientSecret(data.client_secret);
        
      })();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const appearance = {
    theme : 'stripe'
  }

  const loader = 'auto';

  const {state} = useLocation();
  console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  
  return (
    <div>
      <h1>Stripe Payment</h1>
      {
        clientSecret &&
        <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
          <Checkout bookingInfo={state} />
        </Elements>
      }     
    </div>
  )
}

export default StripeHome