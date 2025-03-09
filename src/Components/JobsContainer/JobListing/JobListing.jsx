import React from "react";
import "./JobListing.css";
import JobCard from "./JobCard/JobCard";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
function JobListing() {
  const { jobData, loading, categoryFilter, locationFilter } = useSelector((state) => state?.jobs);

  if (loading) return <Loader />;

  const filteredJobs = jobData?.filter((jd) => {
    const categoryMatch = categoryFilter?.length ? categoryFilter.includes(jd.job_category) : true;
    const locationMatch = locationFilter ? jd?.location?.split(", ")?.[1] === locationFilter : true;
    
    return categoryMatch && locationMatch;
  });

  return (
    <div className="JobListing">
      {filteredJobs?.length? filteredJobs?.map((job) => (
        <JobCard job={job} key={job?.id} />
      )):<>No jobs available</>}
    </div>
  );
}

export default JobListing;
