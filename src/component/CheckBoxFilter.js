import React from 'react'

const CheckBoxFilter = ({ filters, handleCheckBox, filtertitle }) => {
    return (
        <>
            <h1>{filtertitle}</h1>
            {
                filters.map((val) => (
                    <div key={val}>
                        <input className="form-check-input" type='checkbox' value={val} onChange={handleCheckBox} />
                        <label className="form-check-label" htmlFor='val' style={{ marginLeft: '10px' }}>{val}</label>
                    </div>
                ))
            }
        </>
    )
}

export default CheckBoxFilter
