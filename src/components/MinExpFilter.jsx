import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonFilter from "./CommonFilter";
import { addExp } from "../redux/filtersSlice";

function MinExpFilter() {
  const [value, setValue] = React.useState([]);
  const options = useSelector((store) => store.filterOptions.yearsOfExp);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addExp(value));
  }, [value, dispatch]);

  return (
    <CommonFilter
      options={options}
      value={value}
      setValue={setValue}
      label={"Min Exp"}
    />
  );
}

export default MinExpFilter;
