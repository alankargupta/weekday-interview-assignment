import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete,Chip,TextField } from '@mui/material';
import { addCompanyName } from '../redux/filtersSlice';

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
                    variant="filled"
                    label="Seatch Company Name"
                />
            )}
            sx={{width:"200px",borderColor:"black",height:"20px"}}
        />
    );
}

export default CompanyNameFilter
