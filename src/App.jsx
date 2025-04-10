
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router'
import './App.css'
import HomePage from './HomePage/HomePage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
