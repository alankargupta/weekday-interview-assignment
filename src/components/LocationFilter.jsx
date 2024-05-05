import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../redux/filtersSlice";
import CommonFilter from "./CommonFilter";

function LocationFilter() {
  const [value, setValue] = React.useState([]);
  const options = useSelector((store) => store.filterOptions.locations);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addLocation(value));
  }, [value, dispatch]);

  return (
    <CommonFilter
      options={options}
      value={value}
      setValue={setValue}
      label={"Location"}
    />
  );
}

export default LocationFilter;
