import React from 'react'
import { useSelector } from 'react-redux'

function Jobs() {
    const jobs=useSelector((store)=>store.jobs.jobs)
    console.log(jobs)
    // return (
       
    // )
}

export default Jobs
