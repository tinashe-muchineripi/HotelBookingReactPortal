import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router'
import './App.css'
import HomePage from './HomePage/HomePage'
import StripeHome from './StripePayment/StripeHome'
import Book from './Booking/Book'
import FullBooking from './Booking/FullBooking' 
import CompletePayment from './StripePayment/CompletePayment'
import Layout from './SharedFiles/Layout'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='book' element={<FullBooking />} >
            <Route index element={<Book />} />
            <Route path='stripe' element={<StripeHome />} />
            <Route path='complete' element={<CompletePayment />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
