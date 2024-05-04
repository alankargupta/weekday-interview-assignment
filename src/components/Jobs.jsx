import { useSelector } from 'react-redux'
import JobCard from './JobCard'
import { Grid } from '@mui/material'

function Jobs() {
    const jobs = useSelector((store) => store.jobs.jobs)
    console.log(jobs)

    return (
        jobs.map(job => {
            return (<Grid item xs="12" md="6" lg="4">
                <JobCard data={job} />
            </Grid>)
        })
    )

}

export default Jobs
