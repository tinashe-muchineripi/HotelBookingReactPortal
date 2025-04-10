import React from 'react'

function SearchInputs() {
  return (
    <div>
        <label htmlFor="startDate">Start Date :
            <input type="date" id="startDate" name="startDate" />
        </label>
        <label htmlFor="endDate">End Date :
            <input type="date" id="endDate" name="endDate" />
        </label>
    </div>
  )
}

export default SearchInputs