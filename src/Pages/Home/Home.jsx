import React, { useEffect } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Search from "../../Components/SearchComponent/Search";
import FilterSection from "../../Components/JobsContainer/FilterSection/FilterSection";
import JobListing from "../../Components/JobsContainer/JobListing/JobListing";
import { useDispatch } from "react-redux";
import { getJobsData } from "../../Redux/JobReducer/JobSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobsData());
  }, []);
  return (
    <div>
      <Header />
      <Search />
      <div className="JobsContainer">
        <FilterSection />
        <JobListing />
      </div>
    </div>
  );
}

export default Home;
