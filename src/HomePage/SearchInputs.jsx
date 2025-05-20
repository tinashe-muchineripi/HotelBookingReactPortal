import React from 'react'

function SearchInputs({startDate, setStartDate, endDate, setEndDate}) {
  return (
    <div className='search-inputs'>
        <label htmlFor="startDate">Start Date :
            <input 
              type="date" 
              id="startDate" 
              name="startDate" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}/>
        </label>
        <label htmlFor="endDate">End Date :
            <input 
              type="date" 
              id="endDate" 
              name="endDate" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}/>
        </label>
    </div>
  )
}

export default SearchInputs