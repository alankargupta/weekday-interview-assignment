import { Autocomplete, Chip, TextField } from "@mui/material";

function CommonFilter({ options, label, value, setValue }) {
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={options}
      value={value}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => <TextField {...params} label={label} />}
      sx={{
        width: "200px",
        marginTop: "10px",
        borderColor: "black",
        borderWidth: 4,
      }}
    />
  );
}

export default CommonFilter;
