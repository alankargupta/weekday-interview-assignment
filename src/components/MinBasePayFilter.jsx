import React, { useEffect } from "react";
import CommonFilter from "./CommonFilter";
import { useDispatch, useSelector } from "react-redux";
import { addMinSalary } from "../redux/filtersSlice";

function MinBasePayFilter() {
  const [value, setValue] = React.useState([]);
  const options = useSelector((store) => store.filterOptions.minSalaries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addMinSalary(value));
  }, [value, dispatch]);

  return (
    <CommonFilter
      options={options}
      value={value}
      setValue={setValue}
      label={"Min Base Pay"}
    />
  );
}

export default MinBasePayFilter;
