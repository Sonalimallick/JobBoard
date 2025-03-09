import React from "react";
import "./FilterSection.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory, updateLocation } from "../../../Redux/JobReducer/JobSlice";

const JobFilter = () => {
  const dispatch = useDispatch();
  const { jobData,categoryFilter,locationFilter } = useSelector((state) => state?.jobs);
  const handleFullTimeChange = (e) => {
    dispatch(updateCategory(e?.target?.name))
  };

  const handleLocationChange = (e) => {
    dispatch(updateLocation(e?.target?.value))

  };
  const unique_job_categories = [
    ...new Set(jobData?.map((job) => job?.job_category)),
  ].sort();
  const unique_job_locations = [
    ...new Set(jobData?.map((job) => job?.location?.split(", ")?.[1])),
  ].sort();
  return (
    <div className="JobFilter">
      {!!unique_job_categories?.length && <h4>Category</h4>}
      {!!unique_job_categories &&
        unique_job_categories?.map((job_category) => (
          <label key={job_category}>
            <input
              type="checkbox"
              name={job_category}
              checked={categoryFilter?.includes(job_category)}
              onChange={handleFullTimeChange}
            />
            {job_category}
          </label>
        ))}
      <h4>Location</h4>
      <div className="radio-options">
        {unique_job_locations.map((city) => (
          <label key={city}>
            <input
              type="radio"
              name="location"
              value={city}
              checked={locationFilter === city}
              onClick={handleLocationChange}
            />
            {city}
          </label>
        ))}
      </div>
    </div>
  );
};

export default JobFilter;
