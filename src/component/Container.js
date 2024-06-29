import React, { useEffect, useState } from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../redux/slice/cardDataSlice'


const Container = () => {
    const datas = useSelector((state => state.carddata.data))
    const dispatch = useDispatch()
    const [filterdata, setFilterdata] = useState(datas)
    const [searchdata, setSearchData] = useState('')
    const [speciess, setSpeciess] = useState('')
    const [gend, setGends] = useState('')
    const [ori, setOri] = useState('')
    const [toggle, setToggle] = useState(false)

    //inputfield search name
    const handleChange = (e) => {
        setSearchData(e.target.value)

    }

    //when click on submit button 
    const handleSubmit = () => {
        setFilterdata(datas.filter(item => item.name.toLowerCase().includes(searchdata)))

    }
    // sorting 
    const handleSort = (e) => {
        if (e.target.value === 'ascending') {
            setFilterdata([...filterdata].sort((a, b) => a.id - b.id))   //copy the array using spread because it will not modify the orignal array 
        }
        else if (e.target.value === 'decending') {
            setFilterdata([...filterdata].sort((a, b) => b.id - a.id))
        }
    }

    // Species
    const species = [...new Set(filterdata.map(val => val.species))]    //collecting the unquie species
    console.log(species)

    //handleSpecies
    const handleSpecies = (e) => {
        setSpeciess(e.target.value)
        setFilterdata([...filterdata].filter((spec) => spec.species === e.target.value))

    }

    //gender
    const genders = [...new Set(filterdata.map((gen) => gen.gender))]
    console.log(genders)

    //handleGender
    const handleGender = (e) => {
        setGends(e.target.value)
        setFilterdata([...filterdata].filter((gen) => gen.gender === e.target.value))

    }

    //origin
    const origins = [...new Set(filterdata.map((orig) => orig.origin.name))]
    console.log(origins)

    const handleOrigin = (e) => {
        setOri(e.target.value)
        setFilterdata([...filterdata].filter((orig) => orig.origin.name === e.target.value))

    }

    //dispatching the aciton 
    useEffect(() => {
        dispatch(fetchdata())
        
    }, [])


    //setting the datas from the store that received when dispatch the action 
    useEffect(() => {
        setFilterdata(datas)
    }, [datas])                 //will run every time the datas variable changes

    return (
        <>
            <div className='container-fluid cardcont'>
                <div className='row'>
                    <div className='col-12 col-md-2'>
                        <LeftContainer setToggle={setToggle} toggle={toggle} species={species} genders={genders} origins={origins} handleGender={handleGender} handleSpecies={handleSpecies} handleOrigin={handleOrigin} />

                    </div>
                    <div className='col-12 col-md-10'>
                        {
                            toggle ? <h1>Display None</h1> : <RightContainer datas={datas} setFilterdata={setFilterdata} speciess={speciess} ori={ori} gend={gend} filterdata={filterdata} handleChange={handleChange} handleSubmit={handleSubmit} handleSort={handleSort} />
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Container
