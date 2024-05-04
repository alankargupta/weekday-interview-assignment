import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CompanyNameFilter from './CompanyNameFilter'
import { addCompanies } from '../redux/companyNamesSlice'
import { Box } from '@mui/material'

function Filters() {
    const jobs = useSelector((store)=>store.jobs.jobs)
    const dispatch=useDispatch()
   useEffect(()=>{  
    let companyNames = jobs.map((job)=>{
        return job.companyName
    })
    dispatch(addCompanies(companyNames))},[jobs,dispatch])

    return(
        <CompanyNameFilter/>)
    
}

export default Filters
