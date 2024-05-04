import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete,Chip,TextField } from '@mui/material';
import { addCompanyName } from '../redux/filtersSlice';
import {Box} from '@mui/material';

function CompanyNameFilter() {
    const [value, setValue] = React.useState([]);
    const options = useSelector((store)=>store.companies.companies)
    const handleChange=(e,newValue)=>{
           setValue(newValue)
    }
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(addCompanyName(value))
    },[value,dispatch])

    return (
        <Autocomplete
            multiple
            id="tags-filled"
            options={options}
            freeSolo
            value={value}
            onChange={handleChange}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Company Name"
                />
            )}
            sx={{width:"200px",marginTop:"10px",borderColor:"black",borderWidth:4}}
        />
    );
}

export default CompanyNameFilter
