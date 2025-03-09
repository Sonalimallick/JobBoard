import React from "react";
import "./JobListing.css";
import JobCard from "./JobCard/JobCard";
function JobListing() {
  return (
    <div className="JobListing">
      {[1, 2, 3, 4, 5]?.map((job) => (
        <JobCard />
      ))}
    </div>
  );
}

export default JobListing;
