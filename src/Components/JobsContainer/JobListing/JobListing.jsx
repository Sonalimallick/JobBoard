import React from "react";
import "./JobListing.css";
import JobCard from "./JobCard/JobCard";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
function JobListing() {
  const { jobData, loading, categoryFilter, locationFilter, searchFilter } =
    useSelector((state) => state?.jobs);

  if (loading) return <Loader />;

  const filteredJobs = jobData?.filter((jd) => {
    const categoryMatch = categoryFilter?.length
      ? categoryFilter.includes(jd.job_category)
      : true;
    const locationMatch = locationFilter
      ? jd?.location?.split(", ")?.[1] === locationFilter
      : true;
    const searchMatch = searchFilter
      ? jd?.title?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        jd?.company?.toLowerCase().includes(searchFilter.toLowerCase()) ||
        jd?.location?.toLowerCase().includes(searchFilter.toLowerCase())
      : true;

    return categoryMatch && locationMatch && searchMatch;
  });

  return (
    <div className="JobListing">
      {filteredJobs?.length ? (
        filteredJobs?.map((job) => <JobCard job={job} key={job?.id} />)
      ) : (
        <>No jobs available</>
      )}
    </div>
  );
}

export default JobListing;
