import { useEffect, useState } from "react";
import { addJobs } from "../redux/jobsSlice";
import { useDispatch } from "react-redux";
import Jobs from "./Jobs";
import { Grid, Box } from "@mui/material";
import Filters from "./Filters";

function Body() {
  const dispatch = useDispatch();
  const limit = 10;
  const [offset, setOffset] = useState(0);

  const fetchJobs = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: limit,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    const result = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions,
    );
    const json = await result.json();

    dispatch(addJobs(json.jdList));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid container spacing={{ xs: 3 }}>
      <Box sx={{ marginTop: "20px" }}>
        <Filters />
      </Box>

      <Grid item xs={12}>
        <Grid container spacing={{ xs: 3 }}>
          <Jobs />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Body;
