import React from 'react'
import RightTopContainer from './RightTopContainer'
import SearchFilter from './SearchFilter'
import SortFilter from './SortFilter'
import CardContainer from './CardContainer'

const RightContainer = ({ speciess, ori, filterdata, handleChange, handleSubmit, handleSort, gend, datas, setFilterdata }) => {
    return (
        <>
            <RightTopContainer>
                <div className='container-fluid conttop'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h1>Selected Filter</h1>
                            <div className='bg'>
                                {
                                    speciess ? (<span className='bgfiltericon'>{speciess} <i class="fa-solid fa-x" onClick={() => setFilterdata(datas)}></i></span>) : ''
                                }
                                {
                                    gend ? (<span className='bgfiltericon'>{gend} <i class="fa-solid fa-x" onClick={() => setFilterdata(datas)}></i></span>) : ''
                                }
                                {
                                    ori ? (<span className='bgfiltericon'>{ori} <i class="fa-solid fa-x" onClick={() => setFilterdata(datas)}></i></span>) : ''
                                }

                            </div>
                            <SearchFilter handleChange={handleChange} handleSubmit={handleSubmit} />

                        </div>
                        <div className='col-12 col-md-6'>
                            <h1>Sort Filter</h1>
                            <SortFilter handleSort={handleSort} />
                        </div>
                    </div>
                </div>
            </RightTopContainer>

            {/* Card Container  */}

            <CardContainer filterdata={filterdata} />


        </>
    )
}

export default RightContainer
