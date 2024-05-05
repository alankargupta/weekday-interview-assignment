import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import Shimmer from "./Shimmer";

function Jobs({ showShimmer }) {
  let jobs = useSelector((store) => store.jobs.jobs);
  const filters = useSelector((store) => store.filters);
  if (filters.companyName.length > 0)
    jobs = jobs.filter((job) => filters.companyName.includes(job.companyName));
  if (filters.role.length > 0)
    jobs = jobs.filter((job) => filters.role.includes(job.jobRole));
  if (filters.location.length > 0)
    jobs = jobs.filter((job) => filters.location.includes(job.location));
  if (filters.remote.length === 1 && filters.remote[0] === "remote") {
    jobs = jobs.filter((job) => filters.remote.includes(job.location));
  } else if (filters.remote.length === 1 && filters.remote[0] !== "remote") {
    jobs = jobs.filter((job) => {
      return job.location !== "remote";
    });
  }
  if (filters.exp.length === 1 && filters.exp[0] === "Not Specified") {
    jobs = jobs.filter((job) => job.minExp === null);
  } else if (filters.exp.length > 0 && !filters.exp.includes("Not Specified")) {
    jobs = jobs.filter((job) => filters.exp.includes(job.minExp));
  }
  if (filters.minSalary.length > 0)
    jobs = jobs.filter((job) => filters.minSalary.includes(job.minJdSalary));

  return jobs.map((job) => {
    return (
      <Grid item xs={12} md={6} lg={4} key={job.jdUid}>
        {showShimmer ? <Shimmer /> : <JobCard data={job} key={job.jdUid} />}
      </Grid>
    );
  });
}

export default Jobs;
