import {useState} from 'react'
import { useElements, useStripe, PaymentElement } from '@stripe/react-stripe-js'

function Checkout({bookingInfo}) {
  
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url : 'https://localhost:5173/book/complete',
            },
        });

        if(error.type == "card_error" || error.type == "validation_error") {
            setErrorMessage(error.message);
        }else {
            setErrorMessage('An unexpected error occured');
        }

        setIsLoading(false);
      
        completePayment();
    }

    const completePayment = () => {

      const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret'
      );

      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret)
        .then(({ paymentIntent }) => {
        if(paymentIntent.status == 'succeeded') { 
          saveBooking(); 
        }
        });
    }         

    const saveBooking = () => {
        try {
          (async () => {
            await fetch("https://hotelbooking-f8gwf6c7e6c3h3bv.uksouth-01.azurewebsites.net/api/booking", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(bookingInfo),
            });
          })();  
        } catch (error) {
          console.error("Error saving booking:", error);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button disabled={isLoading || !stripe || !elements} type='submit'> 
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
        </button>
        {errorMessage && <div id="payment-message">{errorMessage}</div>}
    </form>
  )
}

export default Checkout