import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyName } from '../redux/filtersSlice';
import CommonFilter from './CommonFilter';

function CompanyNameFilter() {
    const [value, setValue] = React.useState([]);
    const options = useSelector((store)=>store.companies.companies)
    
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(addCompanyName(value))
    },[value,dispatch])

    return (
       <CommonFilter options={options} value={value} setValue={setValue} label={"Search Company Name"}/>
    );
}

export default CompanyNameFilter
