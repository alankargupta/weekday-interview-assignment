import React from 'react'
import { useDispatch } from 'react-redux';
import { addRole } from '../redux/filtersSlice';
import CommonFilter from './CommonFilter';
import { useSelector } from 'react-redux';

function RoleFilter() {
    const [value, setValue] = React.useState([]);
    const options = useSelector((store)=>store.filterOptions.roles)
    
    const dispatch = useDispatch()
    React.useEffect(()=>{
     dispatch(addRole(value))
    },[value,dispatch])

    return (
       <CommonFilter options={options} value={value} setValue={setValue} label={"Role"}/>
    );
}

export default RoleFilter
