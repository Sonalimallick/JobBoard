import React, { useState } from "react";
import "./FilterSection.css";
import { useSelector } from "react-redux";

const JobFilter = ({ onFilterChange }) => {
  const { jobData } = useSelector((state) => state?.jobs);
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");

  const handleFullTimeChange = (e) => {
    setFullTime(e.target.checked);
    onFilterChange({ fullTime: e.target.checked, location });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ fullTime, location: e.target.value });
  };
  const unique_job_categories = [
    ...new Set(jobData?.map((job) => job?.job_category)),
  ].sort();
  const unique_job_locations = [
    ...new Set(jobData?.map((job) => job?.location?.split(", ")?.[1])),
  ].sort();
  console.log(unique_job_locations);
  return (
    <div className="JobFilter">
      {!!unique_job_categories?.length && <h4>Category</h4>}
      {!!unique_job_categories &&
        unique_job_categories?.map((job_category) => (
          <label>
            <input
              type="checkbox"
              checked={fullTime}
              onChange={handleFullTimeChange}
            />
            {job_category}
          </label>
        ))}
      <h4>Location</h4>
      <input
        type="text"
        placeholder="City, state, zip code or country"
        value={location}
        onChange={handleLocationChange}
      />

      <div className="radio-options">
        {unique_job_locations.map((city) => (
          <label key={city}>
            <input
              type="radio"
              name="location"
              value={city}
              checked={location === city}
              onChange={handleLocationChange}
            />
            {city}
          </label>
        ))}
      </div>
    </div>
  );
};

export default JobFilter;
