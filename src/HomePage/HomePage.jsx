import React, {useState} from 'react'
import SearchInputs from './SearchInputs';
import AvailableRooms from './AvailableRooms';

const rooms = [
  {
    "id": 1,
    "title": "Single Room",
    "description": "Ideal for one person. A room with a queen or double bed.",
    "price": 100
  },
  {
    "id": 2,
    "title": "Double Room",
    "description": "Ideal for two people. Has one king bed or two queen beds.",
    "price": 150
  },
  {
    "id": 3,
    "title": "Triple Room",
    "description": "Can fit three people. Has two beds and a sofa bed.",
    "price": 200
  },
  {
    "id": 4,
    "title": "Quad Room",
    "description": "Ideal for four people. Has two queen size beds and two sofa beds",
    "price": 250
  }
];

function HomePage() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const response = await fetch(`https://hotelbooking-f8gwf6c7e6c3h3bv.uksouth-01.azurewebsites.net/
     // api/Room?startDate=${startDate}&endDate=${endDate}`);

    //const data = await response.json();
  }
  
  return (
    <div className="home-page">
        <SearchInputs
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <button type="submit" onClick={handleSubmit}>Search Available Rooms</button>
        <AvailableRooms rooms={rooms} startDate={startDate} endDate={endDate} /> 
    </div>
  )
}

export default HomePage