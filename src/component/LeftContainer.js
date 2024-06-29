import React from 'react'
import CheckBoxFilter from './CheckBoxFilter'
import { toast } from 'react-toastify'

const LeftContainer = ({ species, origins, handleSpecies, genders, handleGender, handleOrigin, setToggle, toggle }) => {

  const togglebutton = () => {
    setToggle(!toggle)
    toast.success('successfully toggle')

  }

  return (
    <>
      <div className='d-flex justify-content-between mt-4'>
        <h1>Filters</h1>
        <i class="fa-solid fa-circle-plus plusicon" onClick={togglebutton}></i>
      </div>
      {/* dynamically checkbox created */}
      <div className='checkboxs'>
        <CheckBoxFilter filtertitle='Species' filters={species} handleCheckBox={handleSpecies} />
      </div>

      <div className='checkboxs'>
        <CheckBoxFilter filtertitle='Gender' filters={genders} handleCheckBox={handleGender} />
      </div>

      <div className='checkboxs'>
        <CheckBoxFilter filtertitle='Origin' filters={origins} handleCheckBox={handleOrigin} />
      </div>

    </>
  )
}

export default LeftContainer
