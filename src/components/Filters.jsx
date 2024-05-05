import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyNameFilter from "./CompanyNameFilter";
import { Box } from "@mui/material";
import {
  addCompanies,
  addLocations,
  addRoles,
  addYearsOfExp,
} from "../redux/filterOptionsSlice";
import RoleFilter from "./RoleFilter";
import LocationFilter from "./LocationFilter";
import RemoteFilter from "./RemoteFilter";
import MinExpFilter from "./MinExpFilter";

function Filters() {
  const jobs = useSelector((store) => store.jobs.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    let companyNames = jobs.map((job) => {
      return job.companyName;
    });
    let roles = jobs.map((job) => {
      return job.jobRole;
    });
    let locations = jobs.map((job) => {
      return job.location;
    });
    let yearsOfExp = jobs.map((job) => {
      return job.minExp !== null ? job.minExp : "Not Specified";
    });
    dispatch(addCompanies(companyNames.sort()));
    dispatch(addRoles(roles.sort()));
    dispatch(addLocations(locations.sort()));
    dispatch(addYearsOfExp(yearsOfExp.sort()));
  }, [jobs, dispatch]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box sx={{ marginLeft: "10px" }}>
        <CompanyNameFilter />
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <RoleFilter />
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <LocationFilter />
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <RemoteFilter />
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <MinExpFilter />
      </Box>
    </Box>
  );
}

export default Filters;
