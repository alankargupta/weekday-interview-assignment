import { useSelector } from 'react-redux'
import JobCard from './JobCard'
import { Grid } from '@mui/material'

function Jobs() {
    let jobs = useSelector((store) => store.jobs.jobs)
    const filters = useSelector((store)=>store.filters)
    if(filters.companyName.length>0) jobs = jobs.filter((job)=>(filters.companyName.includes(job.companyName)))

    return (
        jobs.map(job => {
            return (<Grid item xs="12" md="6" lg="4">
                <JobCard data={job} />
            </Grid>)
        })
    )

}

export default Jobs
