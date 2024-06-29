import React from 'react'


const SearchFilter = ({ handleChange, handleSubmit }) => {

  return (
    <>
      <input type='text' className='form-control' onChange={handleChange} />
      <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default SearchFilter
