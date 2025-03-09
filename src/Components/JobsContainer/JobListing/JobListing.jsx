import React from "react";
import "./JobListing.css";
import JobCard from "./JobCard/JobCard";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
function JobListing() {
  const { jobData, loading } = useSelector((state) => state?.jobs);
  return (
    <div className="JobListing">
      {loading ? (
        <Loader />
      ) : (
        !!jobData && jobData?.map((job) => <JobCard job={job} key={job?.id} />)
      )}
    </div>
  );
}

export default JobListing;
