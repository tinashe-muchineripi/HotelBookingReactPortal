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

function App() {
  

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='book' element={<FullBooking />} >
          <Route index element={<Book />} />
          <Route path='stripe' element={<StripeHome />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
