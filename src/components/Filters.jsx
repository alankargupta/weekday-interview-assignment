import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CompanyNameFilter from './CompanyNameFilter'
import { addCompanies } from '../redux/companyNamesSlice'
import { Box } from '@mui/material'
import { addRoles } from '../redux/rolesSlice'
import RoleFilter from './RoleFilter'

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
        dispatch(addCompanies(companyNames))
        dispatch(addRoles(roles))
    }, [jobs, dispatch])

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{marginLeft:"10px"}}><CompanyNameFilter /></Box>
            <Box sx={{marginLeft:"10px"}}><RoleFilter/></Box>
        </Box>)

}

export default Filters
