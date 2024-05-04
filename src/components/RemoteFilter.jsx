import React from 'react'
import { useDispatch } from 'react-redux';
import { addRemote } from '../redux/filtersSlice';
import CommonFilter from './CommonFilter';

function RemoteFilter() {
    const [value, setValue] = React.useState([]);
    let options = ["remote","on-site"]

    const dispatch = useDispatch()
    React.useEffect(()=>{
     dispatch(addRemote(value))
    },[value,dispatch])

    return (
       <CommonFilter options={options} value={value} setValue={setValue} label={"Remote/On-site"}/>
    );
}

export default RemoteFilter
