import React from 'react'

const SortFilter = ({handleSort}) => {
  return (
    <>

      <select className="form-select" onChange={handleSort}>
        <option>Sort by ID</option>
        <option value='ascending'>Ascending</option>
        <option value='decending'>Decending</option>
      </select>


    </>
  )
}

export default SortFilter
