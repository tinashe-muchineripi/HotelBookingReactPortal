import React from 'react'
import SearchInputs from './SearchInputs'

function SearchBar() {
  return (
    <form action="">
      <SearchInputs />
      <button type="submit">Search Available Rooms</button>
    </form>
  )
}

export default SearchBar