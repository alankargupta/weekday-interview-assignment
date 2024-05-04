import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CompanyNameFilter from './CompanyNameFilter'
import { Box } from '@mui/material'
import { addCompanies,addLocations,addRoles } from '../redux/filterOptionsSlice'
import RoleFilter from './RoleFilter'
import LocationFilter from './LocationFilter'

function Filters() {
    const jobs = useSelector((store) => store.jobs.jobs)
    const dispatch = useDispatch()
    useEffect(() => {
        let companyNames = jobs.map((job) => {
            return job.companyName
        })
        let roles = jobs.map((job) => {
            return job.jobRole
        })
        let locations = jobs.map((job) => {
            return job.location
        })
        dispatch(addCompanies(companyNames))
        dispatch(addRoles(roles))
        dispatch(addLocations(locations))
    }, [jobs, dispatch])

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{marginLeft:"10px"}}><CompanyNameFilter /></Box>
            <Box sx={{marginLeft:"10px"}}><RoleFilter/></Box>
            <Box sx={{marginLeft:"10px"}}><LocationFilter/></Box>
        </Box>)

}

export default Filters
