// import React from "react";
// function FilterSection() {
//   return <div className="FilterSection">FilterSection</div>;
// }

// export default FilterSection;

import React, { useState } from "react";
import "./FilterSection.css";

const JobFilter = ({ onFilterChange }) => {
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

  return (
    <div className="JobFilter">
      <label>
        <input
          type="checkbox"
          checked={fullTime}
          onChange={handleFullTimeChange}
        />
        Full Time
      </label>

      <h4>Location</h4>
      <input
        type="text"
        placeholder="City, state, zip code or country"
        value={location}
        onChange={handleLocationChange}
      />

      <div className="radio-options">
        {["India", "London", "New York", "Berlin"].map((city) => (
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
