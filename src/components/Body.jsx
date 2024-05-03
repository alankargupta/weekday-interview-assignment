import { useEffect, useState } from 'react'
import { addJobs } from '../redux/jobsSlice'
import { useDispatch } from 'react-redux'
import Jobs from './Jobs'

function Body() {
    const dispatch = useDispatch()
    const limit = 10
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        fetchJobs()
    },[])
    const fetchJobs = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": limit,
            "offset": offset
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const result = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        const json = await result.json()
        dispatch(addJobs(json))

    }
    return(
        <Jobs/>
    )

}

export default Body
